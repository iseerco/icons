import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareN = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-1,6v11.09c0,.854-.551,1.59-1.371,1.831-.821.236-1.681-.08-2.144-.799l-6.486-10.88v10.758c0,.553-.448,1-1,1s-1-.447-1-1V6.911c0-.854.551-1.59,1.371-1.832.817-.24,1.681.08,2.144.799l6.486,10.88V6c0-.552.448-1,1-1s1,.448,1,1Z"/></svg>

);
