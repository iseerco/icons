import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMarsDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,14V8a1,1,0,0,0-1-1H17l2.439,2.439-2.534,2.535A6.447,6.447,0,0,0,13.5,11c-.18,0-.356.017-.532.032.014-.176.032-.352.032-.532a6.447,6.447,0,0,0-.974-3.4l2.535-2.534L17,7V1a1,1,0,0,0-1-1H10l2.439,2.439L9.9,4.974A6.5,6.5,0,1,0,6.5,17c.178,0,.352-.018.526-.032C7.011,17.143,7,17.32,7,17.5a6.5,6.5,0,1,0,12.026-3.4l2.535-2.534ZM3,10.5A3.5,3.5,0,1,1,6.5,14,3.5,3.5,0,0,1,3,10.5ZM13.5,21A3.5,3.5,0,1,1,17,17.5,3.5,3.5,0,0,1,13.5,21Z"/></svg>

);
