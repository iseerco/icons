import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PollH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM6,5h6c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1s.45-1,1-1Zm0,4H15c.55,0,1,.45,1,1s-.45,1-1,1H6c-.55,0-1-.45-1-1s.45-1,1-1Zm3,10h-3c-.55,0-1-.45-1-1s.45-1,1-1h3c.55,0,1,.45,1,1s-.45,1-1,1Zm9-4H6c-.55,0-1-.45-1-1s.45-1,1-1h12c.55,0,1,.45,1,1s-.45,1-1,1Z"/></svg>

);
