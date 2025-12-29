import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChartScatter3d = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,12.78l11.49,10.44-.67,.74L12,13.68,.69,23.96,.01,23.22,11.5,12.78V0h1V12.78ZM17,2c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm6,5c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm-14,13c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm7,2c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1ZM7,7c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1ZM1,2c.55,0,1-.45,1-1S1.55,0,1,0,0,.45,0,1s.45,1,1,1ZM3,14c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm16-1c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Z"/></svg>

);
