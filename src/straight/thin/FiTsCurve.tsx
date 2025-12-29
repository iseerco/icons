import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCurve = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m1.039,24H.039C.039,10.787,10.788.038,24,.038v1C11.339,1.038,1.039,11.339,1.039,24Z"/>
</svg>

);
