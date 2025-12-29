import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UtilityPole = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,4V0h-2v2h-2V0h-2v2h-5V0h-2v2h-5V0h-2v2h-2V0H0v4h4.586l6.414,6.414v13.586h2v-13.586l6.414-6.414h4.586Zm-16.586,0h3.586v3.586l-3.586-3.586Zm5.586,3.586v-3.586h3.586l-3.586,3.586Z"/>
</svg>

);
