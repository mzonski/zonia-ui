import styled, { keyframes } from 'styled-components';
import { ColorfulSpinnerProps } from './types';

const innerCircleKeyframes = keyframes`
  0% {
    fill: var(--spinner-color-1);
    r: 3.5;
  }
  12.5% {
    r: 2.5;
  }
  25% {
    fill: var(--spinner-color-2);
    r: 3.5;
  }
  37.5% {
    r: 2.5;
  }
  50% {
    fill: var(--spinner-color-3);
    r: 3.5;
  }
  62.5% {
    r: 2.5;
  }
  75% {
    fill: var(--spinner-color-4);
    r: 3.5;
  }
  87.5% {
    r: 2.5;
  }
  100% {
    fill: var(--spinner-color-1);
    r: 3.5;
  }
`;

const fourColorFillKeyframes = keyframes`
  0% {
    fill: var(--spinner-color-1);
  }
  9% {
    fill: var(--spinner-color-2);
  }
  25% {
    fill: var(--spinner-color-2);
  }
  34% {
    fill: var(--spinner-color-3);
  }
  50% {
    fill: var(--spinner-color-3);
  }
  59% {
    fill: var(--spinner-color-4);
  }
  75% {
    fill: var(--spinner-color-4);
  }
  84% {
    fill: var(--spinner-color-1);
  }
  100% {
    fill: var(--spinner-color-1);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const InnerCircle = styled.circle`
  transform-origin: center;
  animation: ${innerCircleKeyframes} 6s linear infinite;
`;

const Spinner = styled.circle`
  transform-origin: center;
  animation:
    ${fourColorFillKeyframes} 1s linear infinite,
    ${rotate} 1s linear infinite;
`;

const AnimationGroup = styled.g`
  transform-origin: center;
  animation: ${rotate} 2s linear infinite;

  --spinner-color-1: ${(props) => props.theme.colors.secondary.fusionCoral};
  --spinner-color-2: ${(props) => props.theme.colors.secondary.slimeGreen};
  --spinner-color-3: ${(props) => props.theme.colors.secondary.mayaBlue};
  --spinner-color-4: ${(props) => props.theme.colors.secondary.paleViolet};
`;

const ColorfulSpinner = ({
  size = 24,
  strokeColor = 'currentColor',
  strokeWidth = '1.5',
  disableOuterCircle = true,
}: Readonly<ColorfulSpinnerProps>) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      version="1.1"
      id="colorful_spinner_xAsW"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimationGroup overflow="hidden">
        <path
          fill="var(--spinner-color-1)"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M 12 1.4921875 A 10.507402 10.507402 0 0 0 1.4921875 12 L 12 12 L 12 1.4921875 z "
        />
        <path
          fill="var(--spinner-color-2)"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M 12 1.4921875 L 12 12 L 22.507812 12 A 10.507402 10.507402 0 0 0 12 1.4921875 z "
        />
        <path
          fill="var(--spinner-color-3)"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M 22.507812 12 L 12 12 L 12 22.507812 A 10.507402 10.507402 0 0 0 22.507812 12 z "
        />
        <path
          fill="var(--spinner-color-4)"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          d="M 12 12 L 1.4921875 12 A 10.507402 10.507402 0 0 0 12 22.507812 L 12 12 z "
        />

        <InnerCircle
          className="spinner"
          cx="12"
          cy="12"
          r="2.5"
          fill="#ff8577"
          strokeWidth={strokeWidth}
          stroke={strokeColor}
        />

        <circle cx="12" cy="12" r="10.507402" fill="none" strokeWidth={strokeWidth} stroke={strokeColor} />
        {disableOuterCircle || (
          <Spinner
            cx="12"
            cy={2 + Number(strokeWidth)}
            r={2}
            fill="#ff8577"
            strokeWidth={strokeWidth}
            stroke={strokeColor}
          />
        )}
      </AnimationGroup>
    </svg>
  );
};

export default ColorfulSpinner;
