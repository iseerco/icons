import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExpandArrows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8V2a2,2,0,0,0-2-2H16V2h4.586L12,10.586,3.414,2H8V0H2A2,2,0,0,0,0,2V8H2V3.414L10.586,12,2,20.586V16H0v6a2,2,0,0,0,2,2H8V22H3.414L12,13.414,20.586,22H16v2h6a2,2,0,0,0,2-2V16H22v4.586L13.414,12,22,3.414V8Z"/></svg>

);
