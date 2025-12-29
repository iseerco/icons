import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAirFreshener = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,14h7v4H5v-4ZM22.5,3c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5,.672,1.5,1.5,1.5Zm-5.5,11.5v9.5H0V14.5c0-3.175,2.093-6.239,5-7.416V2c0-1.105,.895-2,2-2h3c1.105,0,2,.895,2,2v1h3v3h-3v1.084c2.907,1.177,5,4.241,5,7.416Zm-3,0c0-1.861-1.169-3.708-2.815-4.5H5.815c-1.646,.792-2.815,2.639-2.815,4.5v6.5H14v-6.5ZM22.5,6c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-4-3c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Z"/></svg>

);
