import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaughWink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0ZM6,10A1,1,0,0,1,7,9h3a1,1,0,0,1,0,2H7A1,1,0,0,1,6,10Zm10.949,5.293a5.178,5.178,0,0,1-9.9.007A.994.994,0,0,1,8.009,14H15.99A.994.994,0,0,1,16.949,15.293ZM16,11c-1.105,0-2,0-2-1a2,2,0,0,1,4,0C18,11,17.105,11,16,11Z"/></svg>

);
