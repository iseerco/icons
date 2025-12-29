import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VenusDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,20a1,1,0,0,1-1,1H8v2a1,1,0,0,1-2,0V21H4a1,1,0,0,1,0-2H6V14.849A7.5,7.5,0,1,1,10.124.478a9.454,9.454,0,0,0,0,14.044A7.521,7.521,0,0,1,8,14.977V19h2A1,1,0,0,1,11,20ZM24,7.5a7.5,7.5,0,1,0-8,7.475V19H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V21h2a1,1,0,0,0,0-2H18V14.849A7.513,7.513,0,0,0,24,7.5Z"/></svg>

);
