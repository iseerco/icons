import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCurveAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,0v3c-5.339,0-9.858,3.949-10.512,9.186-.84,6.735-6.639,11.814-13.488,11.814v-3c5.339,0,9.858-3.949,10.512-9.186C11.352,5.079,17.15,0,24,0Z"/>
</svg>

);
