import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFollowing = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,14H5a5.006,5.006,0,0,0-5,5v5H3V19a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2v5h3V19A5.006,5.006,0,0,0,11,14Z"/><path d="M8,12A6,6,0,1,0,2,6,6.006,6.006,0,0,0,8,12ZM8,3A3,3,0,1,1,5,6,3,3,0,0,1,8,3Z"/><path d="M21.75,7.417A2.37,2.37,0,0,0,19.5,9.892a2.37,2.37,0,0,0-2.25-2.475A2.37,2.37,0,0,0,15,9.892c0,2.592,4.5,5.775,4.5,5.775S24,12.484,24,9.892A2.37,2.37,0,0,0,21.75,7.417Z"/></svg>

);
