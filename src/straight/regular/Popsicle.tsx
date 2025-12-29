import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Popsicle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,9C21,4.038,16.963,0,12,0S3,4.038,3,9v12h8v3h2v-3h8v-12Zm-2,10h-6v-10h-2v10h-6v-10c0-3.86,3.14-7,7-7s7,3.14,7,7v10Z"/>
</svg>

);
