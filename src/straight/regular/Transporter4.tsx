import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Transporter4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4.667,17.686l-1.167,2.333-1.167-2.333-2.333-1.167,2.333-1.167,1.167-2.333,1.167,2.333,2.333,1.167-2.333,1.167ZM21.5,2.5l-1-2-1,2-2,1,2,1,1,2,1-2,2-1-2-1ZM4,24h16v-2H4v2Zm12-5v-2h-8v2h8Zm1-7H7v2h10v-2Zm1-5H6v2h12v-2Zm-3-5h-6v2h6v-2Z"/></svg>

);
