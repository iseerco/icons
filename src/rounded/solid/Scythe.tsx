import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Scythe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.483,1.041c-.494-.662-1.251-1.041-2.077-1.041h-5.561C9.722,0,4.516,2.496.372,7.419c-.462.548-.498,1.312-.091,1.902.407.588,1.134.824,1.812.587.29-.103.605-.22.941-.345,1.768-.66,4.189-1.563,6.709-1.563h10.674l-1.487,5h-5.93c-.553,0-1,.448-1,1s.447,1,1,1h5.335l-2.294,7.715c-.157.529.145,1.086.674,1.244.096.028.191.042.285.042.432,0,.829-.281.959-.715L23.893,3.328c.234-.792.085-1.625-.409-2.287Z"/></svg>

);
