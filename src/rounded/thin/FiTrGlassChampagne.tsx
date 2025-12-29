import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrGlassChampagne = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.505,23.001h-4.005l.004-4.018c3.628-.257,6.5-3.292,6.499-7.025l-.801-9.218c-.136-1.562-1.421-2.74-2.989-2.74h-6.417c-1.568,0-2.853,1.178-2.988,2.74l-.803,9.261c0,3.692,2.872,6.724,6.5,6.982l-.004,4.019h-3.996c-.276,0-.5.224-.5.5s.224.5.5.5h9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM6.805,2.826c.09-1.041.947-1.826,1.992-1.826h6.417c1.045,0,1.902.785,1.993,1.827l.189,2.173H6.616l.189-2.174Zm-.801,9.218l.525-6.044h10.954l.523,6.001c0,3.309-2.691,6-6,6s-6-2.691-6.002-5.957Z"/></svg>

);
