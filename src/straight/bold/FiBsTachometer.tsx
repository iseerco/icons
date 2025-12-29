import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTachometer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.536,9.535,14,13.073a2,2,0,1,1-2.177-2.065l3.594-3.594ZM24,13a12.037,12.037,0,0,1-4.967,9.714L18.64,23H5.36l-.393-.286A12,12,0,1,1,24,13Zm-3,0A9,9,0,1,0,6.354,20H17.646A9.032,9.032,0,0,0,21,13Z"/></svg>

);
