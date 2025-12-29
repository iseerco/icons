import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartScatter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.988,24H2.5c-1.378,0-2.5-1.121-2.5-2.5V0H1V21.5c0,.827,.673,1.5,1.5,1.5H23.988v1ZM13,13c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm6-6c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-9,11c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm9-1c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1ZM8,5c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Zm-4,7c0,.552,.448,1,1,1s1-.448,1-1-.448-1-1-1-1,.448-1,1Z"/></svg>

);
