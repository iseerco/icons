import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UsersAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6.349,11H3a1,1,0,0,0-1,1v3H0V12A3,3,0,0,1,3,9H7.537A5.977,5.977,0,0,0,6.349,11ZM21,9H16.463a5.977,5.977,0,0,1,1.188,2H21a1,1,0,0,1,1,1v3h2V12A3,3,0,0,0,21,9Zm-5,4a4,4,0,1,0-4,4A4,4,0,0,0,16,13Zm-2,0a2,2,0,1,1-2-2A2,2,0,0,1,14,13Zm4,8a3,3,0,0,0-3-3H9a3,3,0,0,0-3,3v3H8V21a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v3h2ZM22,4a4,4,0,1,0-4,4A4,4,0,0,0,22,4ZM20,4a2,2,0,1,1-2-2A2,2,0,0,1,20,4ZM10,4A4,4,0,1,0,6,8,4,4,0,0,0,10,4ZM8,4A2,2,0,1,1,6,2,2,2,0,0,1,8,4Z"/></svg>

);
