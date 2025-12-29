import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSchool = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,5H14.042l-.381-.413L17,2.5,13,0H11V3.871L9.958,5H3.5A3.5,3.5,0,0,0,0,8.5V24H24V8.5A3.5,3.5,0,0,0,20.5,5Zm0,3a.5.5,0,0,1,.5.5V10H18.657L16.811,8ZM3.5,8H7.189L5.343,10H3V8.5A.5.5,0,0,1,3.5,8ZM14,21V17a2,2,0,0,0-4,0v4H3V13H6.657L12,7.212,17.343,13H21v8ZM5,16H8v3H5Zm11,0h3v3H16Zm-2.5-4.5A1.5,1.5,0,1,1,12,10,1.5,1.5,0,0,1,13.5,11.5Z"/></svg>

);
