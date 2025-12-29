import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBorderStyleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,0c.55,0,1,.45,1,1s-.45,1-1,1-1-.45-1-1,.45-1,1-1Zm11,1c0,.55,.45,1,1,1s1-.45,1-1-.45-1-1-1-1,.45-1,1ZM0,1c0,.55,.45,1,1,1s1-.45,1-1S1.55,0,1,0,0,.45,0,1ZM0,6c0,.55,.45,1,1,1s1-.45,1-1-.45-1-1-1-1,.45-1,1Zm0,6c0,.55,.45,1,1,1s1-.45,1-1-.45-1-1-1-1,.45-1,1Zm0,6c0,.55,.45,1,1,1s1-.45,1-1-.45-1-1-1-1,.45-1,1ZM11,1c0,.55,.45,1,1,1s1-.45,1-1-.45-1-1-1-1,.45-1,1Zm13,20.5V0h-1V21.5c0,.83-.67,1.5-1.5,1.5H0v1H21.5c1.38,0,2.5-1.12,2.5-2.5Z"/></svg>

);
