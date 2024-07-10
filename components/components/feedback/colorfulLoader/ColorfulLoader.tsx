import { SvgProps, ValidColorFormat } from '@zonia-ui/theme';
import { ColorfulProgressProps, ColorfulLoaderVariant } from './types';

const colorMap = {
  pastel: ['#FD9B28', '#F1F333', '#4ADC7F', '#A68AF8', '#EA4898'],
  default: ['currentColor', 'currentColor', 'currentColor', 'currentColor', 'currentColor'],
} satisfies Record<ColorfulLoaderVariant, (ValidColorFormat | 'currentColor')[]>;

const ColorfulLoader = ({ size = 24, color = 'currentColor', variant = 'pastel' }: Readonly<ColorfulProgressProps>) => {
  const [c1, c2, c3, c4, c5] = colorMap[variant];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="6" width="2.8" height="12" fill={c1} stroke={color} strokeWidth="0.2">
        <animate
          id="spinner_CcmT"
          begin="0;spinner_IzZB.end-0.1s"
          attributeName="y"
          calcMode="spline"
          dur="0.6"
          values="6;3;6"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
        <animate
          begin="0;spinner_IzZB.end-0.1s"
          attributeName="height"
          calcMode="spline"
          dur="0.6"
          values="12;22;12"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
      </rect>
      <rect x="5.8" y="6" width="2.8" height="12" fill={c2} stroke={color} strokeWidth="0.2">
        <animate
          begin="spinner_CcmT.begin+0.1s"
          attributeName="y"
          calcMode="spline"
          dur="0.6"
          values="6;1;6"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
        <animate
          begin="spinner_CcmT.begin+0.1s"
          attributeName="height"
          calcMode="spline"
          dur="0.6"
          values="12;22;12"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
      </rect>
      <rect x="10.6" y="6" width="2.8" height="12" fill={c3} stroke={color} strokeWidth="0.2">
        <animate
          begin="spinner_CcmT.begin+0.2s"
          attributeName="y"
          calcMode="spline"
          dur="0.6"
          values="6;1;6"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
        <animate
          begin="spinner_CcmT.begin+0.2s"
          attributeName="height"
          calcMode="spline"
          dur="0.6"
          values="12;22;12"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
      </rect>
      <rect x="15.4" y="6" width="2.8" height="12" fill={c4} stroke={color} strokeWidth="0.2">
        <animate
          begin="spinner_CcmT.begin+0.3s"
          attributeName="y"
          calcMode="spline"
          dur="0.6"
          values="6;1;6"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
        <animate
          begin="spinner_CcmT.begin+0.3s"
          attributeName="height"
          calcMode="spline"
          dur="0.6"
          values="12;22;12"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
      </rect>
      <rect x="20.2" y="6" width="2.8" height="12" fill={c5} stroke={color} strokeWidth="0.2">
        <animate
          id="spinner_IzZB"
          begin="spinner_CcmT.begin+0.4s"
          attributeName="y"
          calcMode="spline"
          dur="0.6"
          values="6;1;6"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
        <animate
          begin="spinner_CcmT.begin+0.4s"
          attributeName="height"
          calcMode="spline"
          dur="0.6"
          values="12;22;12"
          keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
        />
      </rect>
    </svg>
  );
};

export default ColorfulLoader;
