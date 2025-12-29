import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24A12,12,0,1,0,0,12,12.013,12.013,0,0,0,12,24ZM10.586,8.586a2,2,0,0,1,2.828,0l4.673,4.673-1.414,1.414L12,10,7.288,14.711,5.874,13.3Z"/></svg>

);
