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
