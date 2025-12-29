import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBorderOuter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H0V2.5C0,1.12,1.12,0,2.5,0H21.5c1.38,0,2.5,1.12,2.5,2.5V24ZM1,23H23V2.5c0-.83-.67-1.5-1.5-1.5H2.5c-.83,0-1.5,.67-1.5,1.5V23ZM18,11c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm-6,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm-6,0c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm7,7c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm0-12c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Z"/></svg>

);
