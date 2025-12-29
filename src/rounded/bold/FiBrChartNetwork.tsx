import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrChartNetwork = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,13.5a2.99,2.99,0,0,0-1.653.5l-1.019-.509a6.5,6.5,0,0,0-7.894-7.8l-.6-1.081A3,3,0,1,0,7.171,6l.6,1.074a6.49,6.49,0,0,0-1.322,8.3L3.64,18.069A3,3,0,1,0,5.861,20.1l2.693-2.586a6.49,6.49,0,0,0,8.429-1.34l1.023.511A3,3,0,1,0,21,13.5Zm-9,2A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>

);
