import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBorderInner = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,6c0-.55,.45-1,1-1s1,.45,1,1-.45,1-1,1-1-.45-1-1ZM1,22c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1ZM1,2c.55,0,1-.45,1-1S1.55,0,1,0,0,.45,0,1s.45,1,1,1Zm0,15c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1ZM18,2c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm-12,0c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm17,0c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1ZM12.5,0h-1V11.5H0v1H11.5v11.5h1V12.5h11.5v-1H12.5V0Zm10.5,5c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm0,12c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1ZM6,22c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm12,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm5,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Z"/></svg>

);
