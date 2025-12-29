import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Grape = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.553,1.9,9.447.105A5.871,5.871,0,0,1,12.01,2.562,4.771,4.771,0,0,1,16,0a3,3,0,0,1,3,3,2,2,0,0,1-2,2l0-2a1,1,0,0,0-1-1c-.029,0-2.664.055-2.969,4.193a3,3,0,1,1-2.063,0C10.813,4.043,10.022,2.629,8.553,1.9ZM8,9a3,3,0,1,0-3,3A3,3,0,0,0,8,9ZM19,6a3,3,0,1,0,3,3A3,3,0,0,0,19,6Zm-8,9a3,3,0,1,0-3,3A3,3,0,0,0,11,15Zm5-3a3,3,0,1,0,3,3A3,3,0,0,0,16,12Zm-4,6a3,3,0,1,0,3,3A3,3,0,0,0,12,18Z"/></svg>

);
