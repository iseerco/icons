import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAlbum = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V2.5C0,1.12,1.12,0,2.5,0H21.5c1.38,0,2.5,1.12,2.5,2.5V24ZM1,23H23V2.5c0-.83-.67-1.5-1.5-1.5H2.5c-.83,0-1.5,.67-1.5,1.5V23Zm11-3c-4.41,0-8-3.59-8-8S7.59,4,12,4s8,3.59,8,8-3.59,8-8,8Zm0-15c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7-3.14-7-7-7Zm0,8c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Z"/></svg>

);
