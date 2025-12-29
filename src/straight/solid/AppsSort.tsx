import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AppsSort = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,3v8H11V0H3A3,3,0,0,0,0,3Z"/><path d="M0,21a3,3,0,0,0,3,3h8V13H0Z"/><path d="M20,21.417V2.586l2.584,2.58L24,3.751,21.121.876a3,3,0,0,0-4.239,0l-2.875,2.87L15.42,5.161,18,2.582V21.416l-2.585-2.582-1.413,1.415,2.879,2.875a3,3,0,0,0,4.239,0L24,20.254l-1.413-1.415Z"/></svg>

);
