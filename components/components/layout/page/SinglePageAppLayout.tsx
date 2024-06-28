import React, { Children, isValidElement, PropsWithChildren, ReactNode, useMemo } from 'react';
import { isString } from '@zonia-ui/core';
import { SpaLayoutStyles } from './styles/spa.styles';
import { useSPALayoutCollapseContext, withCollapseContext } from './contexts/CollapseContext';

const spaSlots = ['header', 'sidebar-header', 'sidebar', 'content', 'footer', 'toggle'] as const;
export type SpaSlotProp = (typeof spaSlots)[number];

const isSpaSlot = (value: unknown): value is SpaSlotProp =>
  isString(value) && Array.from(spaSlots).includes(value as SpaSlotProp);

const sanitizeKey = (input: string) => {
  if (!input) throw new Error('Key is not provided to sanitize');
  const pattern = /\.\$([a-zA-Z-]+)/;
  const match = input?.match(pattern);
  return match ? match[1] : undefined;
};

const validateAndGetSlotName = (children: PropsWithChildren['children']) => {
  if (!isValidElement(children) || children.key === null)
    throw new Error('SinglePageAppLayout can contain only React elements with specific keys');
  const slotName = sanitizeKey(children.key);

  console.log('=>(SinglePageAppLayout.tsx:25) slotName', slotName);

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
  togglePlacement: Exclude<SpaSlotProp, 'toggle'>;
};

const spaSlotStyles = {
  content: SpaLayoutStyles.Content,
  footer: SpaLayoutStyles.Footer,
  header: SpaLayoutStyles.Header,
  sidebar: SpaLayoutStyles.Sidebar,
  'sidebar-header': SpaLayoutStyles.SidebarHeader,
} as const;

const TOGGLE_SLOT = 'toggle' as const;

const getAppLayoutContent = ({ children, togglePlacement }: Readonly<SinglePageAppLayoutProps>) => {
  const [slotMap, orphans] = getLayoutSlotMap(children);
  let toggle: ReactNode;
  if (slotMap.has('toggle')) {
    toggle = slotMap.get('toggle');
  }

  const slots: ReactNode[] = [];
  Array.from(slotMap.entries())
    .filter(([type]) => type !== TOGGLE_SLOT)
    .forEach(([type, component]) => {
      if (type === 'toggle') {
        return;
      }

      const Element = spaSlotStyles[type];

      const withExtraElement = togglePlacement === type;
      if (withExtraElement) {
        slots.push(
          <Element key={`${type}_s`}>
            {toggle}
            {component}
          </Element>,
        );
        return;
      }

      slots.push(<Element key={`${type}_s`}>{component}</Element>);
    });

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
