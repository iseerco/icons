import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsComments = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,9A9,9,0,0,0,0,9v9H9A9.01,9.01,0,0,0,18,9ZM9,15H3V9a6,6,0,1,1,6,6Zm15,1v8H16a8,8,0,0,1-6.92-4,10.96,10.96,0,0,0,3.322-.54A4.977,4.977,0,0,0,16,21h5V16a4.977,4.977,0,0,0-1.544-3.6A10.96,10.96,0,0,0,20,9.08,8,8,0,0,1,24,16Z"/></svg>

);
