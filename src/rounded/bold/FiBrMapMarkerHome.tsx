import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMapMarkerHome = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A10.9,10.9,0,0,0,4.22,3.237,11.1,11.1,0,0,0,4.262,18.9L8,22.359a5.706,5.706,0,0,0,7.977.031l3.807-3.536a11.091,11.091,0,0,0,0-15.616A10.9,10.9,0,0,0,12,0Zm5.7,16.7-3.8,3.526a2.75,2.75,0,0,1-3.832-.031L6.346,16.736a8.083,8.083,0,0,1,0-11.382,7.967,7.967,0,0,1,11.308,0h0A8.073,8.073,0,0,1,17.7,16.7ZM17,10.128V14a1,1,0,0,1-1,1H15a1,1,0,0,1-1-1V12a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v2a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V10.128a2,2,0,0,1,.86-1.643l3-2.082a2,2,0,0,1,2.28,0l3,2.082A2,2,0,0,1,17,10.128Z"/></svg>

);
