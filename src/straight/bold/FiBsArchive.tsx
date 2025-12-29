import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArchive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5A3,3,0,0,0,2,3V24H22V3A3,3,0,0,0,19,0Zm0,3v8H5V3ZM5,21V14H19v7Z"/><rect x="10" y="6" width="4" height="3"/><rect x="10" y="16" width="4" height="3"/></svg>

);
