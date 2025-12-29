import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCrossCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="16.879 9.242 14.758 7.121 12 9.879 9.242 7.121 7.121 9.242 9.879 12 7.121 14.758 9.242 16.879 12 14.121 14.758 16.879 16.879 14.758 14.121 12 16.879 9.242"/><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.01,9.01,0,0,0,12,3Z"/></svg>

);
