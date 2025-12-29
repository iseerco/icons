import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VenusDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,7.5A7.486,7.486,0,0,0,12.005,1.51,7.5,7.5,0,1,0,6,14.849V19H3v2H6v3H8V21h3V19H8V14.976a7.442,7.442,0,0,0,4.005-1.486A7.456,7.456,0,0,0,16,14.975V19H13v2h3v3h2V21h3V19H18V14.849A7.513,7.513,0,0,0,24,7.5Zm-2,0A5.5,5.5,0,1,1,16.5,2,5.506,5.506,0,0,1,22,7.5ZM2,7.5a5.49,5.49,0,0,1,8.56-4.561,7.448,7.448,0,0,0,0,9.122A5.49,5.49,0,0,1,2,7.5Z"/></svg>

);
