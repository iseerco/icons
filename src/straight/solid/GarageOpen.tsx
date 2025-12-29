import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GarageOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,16H7V13H17Zm7-5.957a2.981,2.981,0,0,0-1.151-2.362l-9-7.044a3,3,0,0,0-3.7,0l-9,7.042A2.985,2.985,0,0,0,0,10.043V24H5V12a1,1,0,0,1,1-1H18a1,1,0,0,1,1,1V24h5Z"/></svg>

);
