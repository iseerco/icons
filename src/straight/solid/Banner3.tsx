import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Banner3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m5.478,20.609l4.522,3.391-8-2v-4l1.689-2.533,5.957,3.475-4.167,1.667ZM1.075,1.234L.019,9.876l23.981,1.124V.023L1.075,1.234Zm10.925,16.766v-5.56l-10.365-.486,10.365,6.046Z"/>
</svg>

);
