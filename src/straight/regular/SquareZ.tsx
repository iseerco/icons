import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.552.449-1,1-1h18c.551,0,1,.448,1,1v19Zm-14.566-5h11.566v2H6.767c-.716,0-1.357-.428-1.631-1.09-.274-.661-.125-1.417.382-1.924l11.048-8.986H5v-2h12.233c.716,0,1.357.428,1.631,1.09.274.661.125,1.417-.382,1.924l-11.048,8.986Z"/></svg>

);
