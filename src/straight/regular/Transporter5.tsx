import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Transporter5 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,16.519l-2.333,1.167-1.167,2.333-1.167-2.333-2.333-1.167,2.333-1.167,1.167-2.333,1.167,2.333,2.333,1.167ZM6.5,3.5l-2-1L3.5.5l-1,2L.5,3.5l2,1,1,2,1-2,2-1Zm-2.5,20.52h16v-2H4v2Zm13-10v-2H7v2h10Zm1-7H6v2h12v-2Zm-3-5h-6v2h6v-2Z"/></svg>

);
