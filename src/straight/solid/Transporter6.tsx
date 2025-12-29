import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Transporter6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,3.5l-2.333,1.167-1.167,2.333-1.167-2.333-2.333-1.167,2.333-1.167,1.167-2.333,1.167,2.333,2.333,1.167ZM4.5,15.5l-1-2-1,2-2,1,2,1,1,2,1-2,2-1-2-1Zm15.5,6.5H4v2h16v-2Zm-3-10.5H7v2h10v-2Zm-2-9.5h-6v2h6v-2Z"/></svg>

);
