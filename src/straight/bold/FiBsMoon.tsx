import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,24A12.013,12.013,0,0,1,2,12C1.847,3.043,12.031-2.983,19.792,1.508L22.122,2.8,19.809,4.122a8.55,8.55,0,0,0,.718,15.167l2.433,1.1-2.2,1.508A11.921,11.921,0,0,1,14,24ZM14,3a9,9,0,1,0,2.848,17.529c-5.366-4.022-5.793-12.77-.817-17.3A8.873,8.873,0,0,0,14,3Z"/></svg>

);
