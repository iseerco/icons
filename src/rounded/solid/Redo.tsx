import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Redo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.244,4A2,2,0,0,0,13.83,5.414V7H9a9.01,9.01,0,0,0-9,9v7a1,1,0,0,0,2,0,6.006,6.006,0,0,1,6-6h5.83v1.586A2,2,0,0,0,17.244,20l5.879-5.879a3,3,0,0,0,0-4.242Z"/></svg>

);
