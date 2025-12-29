import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMapMarkerMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,22.36a5.706,5.706,0,0,0,7.976.03l3.808-3.537a11.093,11.093,0,0,0,0-15.615,10.967,10.967,0,0,0-15.561,0,11.1,11.1,0,0,0,.042,15.656ZM6.346,5.354a7.967,7.967,0,0,1,11.308,0A8.074,8.074,0,0,1,17.7,16.7l-3.8,3.525a2.754,2.754,0,0,1-3.832-.03L6.346,16.737A8.084,8.084,0,0,1,6.346,5.354ZM7,11A1.5,1.5,0,0,1,8.5,9.5h7a1.5,1.5,0,0,1,0,3h-7A1.5,1.5,0,0,1,7,11Z"/></svg>

);
