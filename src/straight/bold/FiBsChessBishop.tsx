import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChessBishop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,15c0-4.962-6.408-10.206-7.879-11.344a2,2,0,1,0-2.262-.014C9.28,4.707,3,9.3,3,15a8.963,8.963,0,0,0,2.3,6H3v3H21V21H18.7A8.963,8.963,0,0,0,21,15ZM6,15c0-3.413,3.726-6.842,5.935-8.453a29.557,29.557,0,0,1,2.469,2.3l-3.375,4.218,2.342,1.876,3-3.755A7.207,7.207,0,0,1,18,15,6,6,0,0,1,6,15Z"/></svg>

);
