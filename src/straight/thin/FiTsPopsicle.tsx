import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPopsicle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,9C21,4.038,16.963,0,12,0S3,4.038,3,9v12h8.5v3h1v-3h8.5v-12Zm-1,11h-7.5v-12h-1v12h-7.5v-11C4,4.589,7.589,1,12,1s8,3.589,8,8v11Z"/>
</svg>

);
