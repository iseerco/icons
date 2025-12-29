import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Transporter6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,3.5l-2.333,1.167-1.167,2.333-1.167-2.333-2.333-1.167,2.333-1.167,1.167-2.333,1.167,2.333,2.333,1.167ZM6.5,16.5l-2-1-1-2-1,2-2,1,2,1,1,2,1-2,2-1Zm-2.5,7.5h16v-2H4v2Zm13-12.5H7v2h10v-2Zm-2-9.5h-6v2h6v-2Z"/></svg>

);
