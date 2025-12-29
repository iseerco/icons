import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBallot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5c-1.93,0-3.5,1.57-3.5,3.5V24H22V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H5V3.5c0-.276,.224-.5,.5-.5h13c.276,0,.5,.224,.5,.5V21ZM12,5h5v3h-5v-3Zm0,5h5v3h-5v-3Zm0,5h5v3h-5v-3ZM7,5h3v3h-3v-3Zm0,5h3v3h-3v-3Zm0,5h3v3h-3v-3Z"/></svg>

);
