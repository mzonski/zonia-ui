import { SvgProps } from '@zonia-ui/theme';

export const DiamondIcon = ({ size = 16, color = 'currentColor' }: Partial<SvgProps>) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.726318 7.99992L1.19654 7.5297L7.5299 1.19637L8.00013 0.726135L8.47036 1.19637L14.8036 7.52978L15.2738 8.00001L14.8036 8.47023L8.47018 14.8035L7.99995 15.2737L7.52973 14.8035L1.19653 8.47015L0.726318 7.99992ZM2.60721 7.99993L7.99997 13.3928L13.3929 7.99998L8.00012 2.60705L2.60721 7.99993Z"
        fill={color}
      />
    </svg>
  );
};
