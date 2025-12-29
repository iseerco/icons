import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretCircleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12ZM11.6,6.269l5.154,5.087a.9.9,0,0,1,0,1.288L11.6,17.731a.924.924,0,0,1-1.575-.644V6.913A.924.924,0,0,1,11.6,6.269Z"/></svg>

);
