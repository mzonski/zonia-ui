import type { Property } from 'csstype';
import { css } from 'styled-components';

import { RuleBuilder } from '../utils';

export const flexAlignmentMixin = (
  justifyContent?: Property.JustifyContent,
  alignItems?: Property.AlignItems,
  inline = false,
) => {
  const builder = new RuleBuilder();

  builder.add(
    !!justifyContent,
    css`
      justify-content: ${justifyContent};
    `,
  );

  builder.add(
    !!alignItems,
    css`
      align-items: ${alignItems};
    `,
  );

  builder.push(css`
    display: ${inline ? 'inline-flex' : 'flex'};
  `);

  return builder.build();
};

export const fillAbsoluteSpaceMixin = () => {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `;
};

export const absoluteCenterMixin = () => css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const responsiveGridMixin = (columns: number, gap: string) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  gap: ${gap};
`;

export const stickyFooterMixin = () => css`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
