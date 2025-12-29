import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm-2,19H6.767c-.716,0-1.357-.428-1.631-1.09-.274-.661-.125-1.417.382-1.924l.077-.069,10.972-8.917H5v-2h12.233c.716,0,1.357.428,1.631,1.09.274.661.125,1.417-.382,1.924l-.077.069-10.972,8.917h11.566v2Z"/></svg>

);
