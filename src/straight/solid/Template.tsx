import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Template = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.41,5h-4.41V.59l4.41,4.41Zm-5.41,13H8v-6h8v6Zm6-11V24H2V3C2,1.34,3.34,0,5,0H15V7h7Zm-16,0h5v-2H6v2Zm12,3H6v10h12V10Z"/></svg>

);
