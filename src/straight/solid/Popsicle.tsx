import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Popsicle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C7.038,0,3,4.038,3,9v12h8v3h2v-3h8v-12C21,4.038,16.963,0,12,0Zm-1,19v-10h2v10h-2Z"/>
</svg>

);
