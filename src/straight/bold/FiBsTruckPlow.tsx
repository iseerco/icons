import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTruckPlow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,18.379V10.621l1.811-1.81L21.689,6.689,19,9.379V13H16.964a3.509,3.509,0,0,0-1.936-2.648L10.25,3.5A3.5,3.5,0,0,0,7.379,2H3v8.036A3.5,3.5,0,0,0,0,13.5V19H2.05a2.5,2.5,0,1,0,4.9,0h3.1a2.5,2.5,0,1,0,4.9,0H17V16h2v3.621l2.752,2.752,2.121-2.121ZM7.379,5a.5.5,0,0,1,.41.214L11.126,10H6V5ZM3,13.5a.5.5,0,0,1,.5-.5h10a.5.5,0,0,1,.5.5V16H3Z"/></svg>

);
