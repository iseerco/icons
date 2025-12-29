import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Farm = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.579,15h6.842l-3.421,2.799-3.421-2.799Zm7.842,9l-4.421-3.617-4.421,3.617h8.842Zm-2.842-4.909l3.421,2.799v-5.598l-3.421,2.799Zm10.421-8.446v8.355c0,2.757-2.243,5-5,5v-8c0-1.654-1.346-3-3-3H8c-1.654,0-3,1.346-3,3v8c-2.757,0-5-2.243-5-5V10.645c0-.792,.232-1.56,.672-2.219L3.673,3.923c.432-.647,1.038-1.151,1.752-1.458L10.424,.324c1.001-.43,2.15-.43,3.152,0l4.998,2.142c.715,.307,1.321,.811,1.752,1.458l3.001,4.502c.439,.659,.672,1.426,.672,2.219Zm-9-3.645c0-1.654-1.346-3-3-3s-3,1.346-3,3,1.346,3,3,3,3-1.346,3-3Zm-3-1c-.551,0-1,.449-1,1s.449,1,1,1,1-.449,1-1-.449-1-1-1Zm-5,10.292v5.598l3.421-2.799-3.421-2.799Z"/></svg>

);
