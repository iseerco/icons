import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExpandArrows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,9a1,1,0,0,0,1-1V3a3,3,0,0,0-3-3H16a1,1,0,0,0,0,2h4.586L12,10.586,3.414,2H8A1,1,0,0,0,8,0H3A3,3,0,0,0,0,3V8A1,1,0,0,0,2,8V3.414L10.586,12,2,20.586V16a1,1,0,0,0-2,0v5a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2H3.414L12,13.414,20.586,22H16a1,1,0,0,0,0,2h5a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v4.586L13.414,12,22,3.414V8A1,1,0,0,0,23,9Z"/></svg>

);
