import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Information = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,1.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm6,20.5h-3v-12c0-2.757-2.243-5-5-5-.552,0-1,.448-1,1s.448,1,1,1c1.654,0,3,1.346,3,3v12h-3c-.552,0-1,.447-1,1s.448,1,1,1h8c.552,0,1-.447,1-1s-.448-1-1-1Z"/></svg>

);
