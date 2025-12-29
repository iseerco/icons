import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessPawnAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,19c-.747,0-2.22-2.251-2.465-9H18V7H16.582A5,5,0,1,0,7.418,7H6v3H7.965C7.72,16.749,6.247,19,5.5,19A3.5,3.5,0,0,0,2,22.5V24H22V22.5A3.5,3.5,0,0,0,18.5,19ZM12,3a2,2,0,1,1-2,2A2,2,0,0,1,12,3Zm-1.033,7h2.066c.113,3.3.537,6.672,1.608,9H9.359C10.43,16.672,10.854,13.3,10.967,10Z"/></svg>

);
