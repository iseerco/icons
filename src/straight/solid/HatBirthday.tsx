import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HatBirthday = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.031,12,10.207,24H6.177L14.943,8.239Zm1.137,2.046L12.508,24H16.7l3.548-6.209Zm3.217,5.791L19.006,24H23.7ZM12.542,3.916a2,2,0,1,0-1.084,0L.3,24H3.889L13.8,6.18Z"/></svg>

);
