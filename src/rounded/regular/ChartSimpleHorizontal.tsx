import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ChartSimpleHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,9H3c-1.65,0-3,1.35-3,3s1.35,3,3,3H21c1.65,0,3-1.35,3-3s-1.35-3-3-3Zm0,4H3c-.55,0-1-.45-1-1s.45-1,1-1H21c.55,0,1,.45,1,1s-.45,1-1,1ZM3,6H15c1.65,0,3-1.35,3-3s-1.35-3-3-3H3C1.35,0,0,1.35,0,3s1.35,3,3,3Zm0-4H15c.55,0,1,.45,1,1s-.45,1-1,1H3c-.55,0-1-.45-1-1s.45-1,1-1Zm6,16H3c-1.65,0-3,1.35-3,3s1.35,3,3,3h6c1.65,0,3-1.35,3-3s-1.35-3-3-3Zm0,4H3c-.55,0-1-.45-1-1s.45-1,1-1h6c.55,0,1,.45,1,1s-.45,1-1,1Z"/></svg>

);
