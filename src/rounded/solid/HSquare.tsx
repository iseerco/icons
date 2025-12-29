import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-1,18c0,.552-.448,1-1,1s-1-.448-1-1v-5h-8v5c0,.552-.448,1-1,1s-1-.448-1-1V6c0-.552.448-1,1-1s1,.448,1,1v5h8v-5c0-.552.448-1,1-1s1,.448,1,1v12Z"/></svg>

);
