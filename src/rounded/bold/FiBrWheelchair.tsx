import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrWheelchair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.5,3a3,3,0,1,1,3,3A3,3,0,0,1,8.5,3Zm14,17h-.984L20.4,17.2a3.485,3.485,0,0,0-3.25-2.2H13.5a.5.5,0,0,1-.5-.5V13h4.5a1.5,1.5,0,0,0,0-3H13V8.5a1.5,1.5,0,0,0-3,0v6a3.5,3.5,0,0,0,2.613,3.372,4.99,4.99,0,1,1-5.768-6.738,1.5,1.5,0,0,0-.69-2.92A8,8,0,1,0,15.742,18h1.4a.5.5,0,0,1,.464.313l1.5,3.744A1.5,1.5,0,0,0,20.5,23h2a1.5,1.5,0,0,0,0-3Z"/></svg>

);
