import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretQuareUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,24H19a5.006,5.006,0,0,0,5-5V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19A5.006,5.006,0,0,0,5,24ZM6.269,13.4,11.356,8.25a.9.9,0,0,1,1.288,0L17.731,13.4a.924.924,0,0,1-.644,1.575H6.913A.924.924,0,0,1,6.269,13.4Z"/></svg>

);
