/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { useToggle } from '@zonia-ui/core';
import { AppLayout, SinglePageAppLayoutProps } from '../SinglePageAppLayout';

type CollapseContextValue = {
  set: (isCollapsed: boolean) => void;
  toggle: () => void;
  collapsed: boolean;
};

const CollapseContext = createContext({} as CollapseContextValue);

const SpaLayoutCollapsedProvider = ({ children, defaultValue }: PropsWithChildren<{ defaultValue?: boolean }>) => {
  const [collapsed, toggle, set] = useToggle(defaultValue ?? false);

  const contextValue = useMemo(() => ({ collapsed, toggle, set }), [collapsed, toggle, set]);

  return <CollapseContext.Provider value={contextValue}>{children}</CollapseContext.Provider>;
};

export const useSPALayoutCollapseContext = () => {
  const context = useContext(CollapseContext);

  return context;
};

export function withCollapseContext<T extends SinglePageAppLayoutProps>(WrappedComponent: typeof AppLayout) {
  return function WrappedWithCollapseContext(props: T) {
    const { defaultSidebarOpen } = props;

    return (
      <SpaLayoutCollapsedProvider defaultValue={defaultSidebarOpen}>
        <WrappedComponent {...props} />
      </SpaLayoutCollapsedProvider>
    );
  };
}
