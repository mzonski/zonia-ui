import React, { Children, isValidElement, PropsWithChildren, ReactNode, useMemo } from 'react';
import { isString } from '@zonia-ui/core';
import { ValuesType } from 'utility-types';
import { SpaLayoutStyles } from './spa.styles';
import { useSPALayoutCollapseContext, withCollapseContext } from './contexts/CollapseContext';

const spaSlots = ['header', 'sidebar-header', 'sidebar', 'content', 'footer', 'toggle'] as const;
export type SpaSlotProp = (typeof spaSlots)[number];

const isSpaSlot = (value: unknown): value is SpaSlotProp =>
  isString(value) && Array.from(spaSlots).includes(value as SpaSlotProp);

const sanitizeKey = (input: string) => {
  if (!input) throw new Error('Key is not provided to sanitize');
  const pattern = /\.\$(\w+)/;
  const match = input?.match(pattern);
  return match ? match[1] : undefined;
};

const validateAndGetSlotName = (children: PropsWithChildren['children']) => {
  if (!isValidElement(children) || children.key === null)
    throw new Error('SinglePageAppLayout can contain only React elements with specific keys');
  const slotName = sanitizeKey(children.key);

  return [slotName, children] as const;
};

const getLayoutSlotMap = (componentChildren: PropsWithChildren['children']) => {
  const slotMap = new Map<SpaSlotProp, ReactNode>();
  const orphans = new Array<ReactNode>();

  Children.toArray(componentChildren).forEach((children) => {
    const [slotName, orphan] = validateAndGetSlotName(children);
    if (!slotName) {
      orphans.push(orphan);
      return;
    }

    if (isSpaSlot(slotName)) {
      slotMap.set(slotName, children);
    }
  });

  return [slotMap, orphans] as const;
};

export type SinglePageAppLayoutProps = PropsWithChildren & {
  defaultSidebarOpen?: boolean;
  togglePlacement: SpaSlotProp;
};

const styleMap: Record<SpaSlotProp, ValuesType<typeof SpaLayoutStyles>> = {
  header: SpaLayoutStyles.Header,
  'sidebar-header': SpaLayoutStyles.SidebarHeader,
  content: SpaLayoutStyles.Content,
  sidebar: SpaLayoutStyles.Sidebar,
  footer: SpaLayoutStyles.Footer,
  toggle: SpaLayoutStyles.Toggle,
};

const TOGGLE_SLOT = 'toggle';

const getStyleElement = (slot: 'content' | 'footer' | 'header' | 'sidebar-header' | 'sidebar') => {
  switch (slot) {
    case 'content':
      return SpaLayoutStyles.Content;
    case 'footer':
      return SpaLayoutStyles.Footer;
    case 'header':
      return SpaLayoutStyles.Header;
    case 'sidebar-header':
      return SpaLayoutStyles.SidebarHeader;
    case 'sidebar':
      return SpaLayoutStyles.Sidebar;
    default:
      throw new Error('Slot not supported', slot);
  }
};

const getAppLayoutContent = ({ children, togglePlacement }: Readonly<SinglePageAppLayoutProps>) => {
  const [slotMap, orphans] = getLayoutSlotMap(children);
  const slots = [];
  Array.from(slotMap.entries())
    .filter(([type]) => type !== TOGGLE_SLOT)
    .forEach(([type, component]) => {
      const Wrapper = styleMap[type];
      if (!Wrapper) {
        orphans.push(component);
        return;
      }
      if (type === 'toggle') return;
      const Element = getStyleElement(type);

      return <Element key={`${type}_s`}>{component}</Element>;
    });

  if (slotMap.has('toggle')) {
    const component = slotMap.get('toggle');
    slots.push(
      <SpaLayoutStyles.Toggle key="toggle_s" $gridArea={togglePlacement}>
        {component}
      </SpaLayoutStyles.Toggle>,
    );
  }

  return [slots, orphans] as const;
};

/**
 *
 * @param {Object} props - The props object.
 * @param {SinglePageAppLayoutProps<SpaReactElement>} props.children - Slots: Assign a React element to one of the following keys: 'header', 'sidebarHeader', 'sidebar', 'content', 'footer'. Rest elements will mount on end
 *
 * @returns The rendered SinglePageAppLayout component.
 * @constructor
 */
export const AppLayout = (props: Readonly<SinglePageAppLayoutProps>) => {
  const { collapsed } = useSPALayoutCollapseContext();

  const [slots, orphans] = useMemo(() => {
    return getAppLayoutContent(props);
  }, [props]);

  return (
    <SpaLayoutStyles.Container $sidebarCollapsed={collapsed}>
      {slots}
      {orphans}
    </SpaLayoutStyles.Container>
  );
};
AppLayout.defaultName = 'ZUISinglePageAppLayout';

const WrappedComponent = withCollapseContext(AppLayout);

export default WrappedComponent;
