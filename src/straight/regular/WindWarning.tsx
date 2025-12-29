import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindWarning = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,20a4,4,0,0,1-8,0H9a2,2,0,1,0,2-2H0V16H11A4,4,0,0,1,15,20ZM8,3H6V8H8ZM8,9H6v2H8ZM0,7a7,7,0,1,1,7,7A7.008,7.008,0,0,1,0,7ZM2,7A5,5,0,1,0,7,2,5.006,5.006,0,0,0,2,7ZM20,9a4,4,0,1,0-4-4h2a2,2,0,1,1,2,2H16a9.028,9.028,0,0,1-.223,2Zm0,2H15.064a9.057,9.057,0,0,1-1.356,2H20a2,2,0,1,1-2,2H16a4,4,0,1,0,4-4Z"/></svg>

);
