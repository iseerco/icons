import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,5V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5ZM10.6,6.269l5.154,5.087a.9.9,0,0,1,0,1.288L10.6,17.731a.924.924,0,0,1-1.575-.644V6.913A.924.924,0,0,1,10.6,6.269Z"/></svg>

);
