import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HomeLocationAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,9.007a5,5,0,0,0-3.536,8.536L12,21.2l3.543-3.669A5,5,0,0,0,12,9.007Zm0,6.987a2,2,0,1,1,2-2A2,2,0,0,1,12,15.994ZM22.849,7.681l-9-7.044a3,3,0,0,0-3.7,0l-9,7.042A2.988,2.988,0,0,0,0,10.044V24H24V10.044A2.985,2.985,0,0,0,22.849,7.681Zm-5.9,11.276L12.105,23.9,7.058,18.965a7,7,0,1,1,9.892-.008Z"/></svg>

);
