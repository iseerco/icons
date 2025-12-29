import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PriorityArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,15h6v-6h-6v6Zm0-14v6h6V1h-6Zm0,22h6v-6h-6v6Zm-1.705-19.628c.347.347.347.91,0,1.257l-3.295,3.371v-3h-4c-3.86,0-7,3.14-7,7s3.14,7,7,7h7v2h-7C4.038,21,0,16.963,0,12S4.038,3,9,3h4V0l3.295,3.372Z"/>
</svg>

);
