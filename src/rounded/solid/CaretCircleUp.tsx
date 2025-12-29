import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CaretCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,0,0,12,12.013,12.013,0,0,0,12,24ZM6.269,12.4,11.356,7.25a.9.9,0,0,1,1.288,0L17.731,12.4a.924.924,0,0,1-.644,1.575H6.913A.924.924,0,0,1,6.269,12.4Z"/></svg>

);
