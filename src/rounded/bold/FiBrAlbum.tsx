import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAlbum = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,24H5.5c-3.03,0-5.5-2.47-5.5-5.5V5.5C0,2.47,2.47,0,5.5,0h13c3.03,0,5.5,2.47,5.5,5.5v13c0,3.03-2.47,5.5-5.5,5.5ZM5.5,3c-1.38,0-2.5,1.12-2.5,2.5v13c0,1.38,1.12,2.5,2.5,2.5h13c1.38,0,2.5-1.12,2.5-2.5V5.5c0-1.38-1.12-2.5-2.5-2.5H5.5Zm6.5,16c-3.86,0-7-3.14-7-7s3.14-7,7-7,7,3.14,7,7-3.14,7-7,7Zm0-11c-2.21,0-4,1.79-4,4s1.79,4,4,4,4-1.79,4-4-1.79-4-4-4Zm0,5.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Z"/></svg>

);
