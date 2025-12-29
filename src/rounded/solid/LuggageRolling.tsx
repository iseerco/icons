import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LuggageRolling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,8H17V5A5,5,0,0,0,7,5V8H5a5.006,5.006,0,0,0-5,5v4a5,5,0,0,0,3,4.576V23a1,1,0,0,0,2,0V22H19v1a1,1,0,0,0,2,0V21.576A5,5,0,0,0,24,17V13A5.006,5.006,0,0,0,19,8ZM9,5a3,3,0,0,1,6,0V8H9Zm7,8H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"/></svg>

);
