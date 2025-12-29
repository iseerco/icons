import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Subtitles = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,22H5a5.006,5.006,0,0,1-5-5V7A5.006,5.006,0,0,1,5,2H19a5.006,5.006,0,0,1,5,5V17A5.006,5.006,0,0,1,19,22ZM5,4A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3Z"/><path d="M19,13H11a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"/><path d="M7,13H5a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z"/><path d="M13,18H5a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"/><path d="M19,18H17a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"/></svg>

);
