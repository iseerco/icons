import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartScatter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.988,24H2.988C1.333,24-.012,22.654-.012,21V0H1.988V21c0,.552,.449,1,1,1H23.988v2ZM14,13c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm6-6c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-9,11c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm9-1c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1ZM9,5c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-4,7c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Z"/></svg>

);
