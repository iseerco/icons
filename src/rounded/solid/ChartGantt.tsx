import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartGantt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,24H5c-2.76,0-5-2.24-5-5V1C0,.45,.45,0,1,0s1,.45,1,1V19c0,1.65,1.35,3,3,3H23c.55,0,1,.45,1,1s-.45,1-1,1Zm1-7c0-.55-.45-1-1-1h-6c-.55,0-1,.45-1,1s.45,1,1,1h6c.55,0,1-.45,1-1Zm-4-6c0-.55-.45-1-1-1H10c-.55,0-1,.45-1,1s.45,1,1,1h9c.55,0,1-.45,1-1Zm-7-6c0-.55-.45-1-1-1H6c-.55,0-1,.45-1,1s.45,1,1,1h6c.55,0,1-.45,1-1Z"/></svg>

);
