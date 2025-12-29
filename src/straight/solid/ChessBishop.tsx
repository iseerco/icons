import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChessBishop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,15c0-2.248-1.382-4.605-3.022-6.621l-5,6.246-1.562-1.25,5.219-6.523a36.358,36.358,0,0,0-3.489-3.219A2,2,0,1,0,10.807,3.6C8.814,4.987,3,9.511,3,15a8.983,8.983,0,0,0,3.356,7H3v2H21V22H17.645A8.985,8.985,0,0,0,21,15Z"/></svg>

);
