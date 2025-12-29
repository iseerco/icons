import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Print = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,4a4,4,0,0,0-4-4H9A4,4,0,0,0,5,4V5H19Z"/><rect x="5" y="15" width="14" height="9" rx="3"/><path d="M19,7H5a5.006,5.006,0,0,0-5,5v4a5,5,0,0,0,3,4.576V18a5.006,5.006,0,0,1,5-5h8a5.006,5.006,0,0,1,5,5v2.576A5,5,0,0,0,24,16V12A5.006,5.006,0,0,0,19,7Zm-1,4H16a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"/></svg>

);
