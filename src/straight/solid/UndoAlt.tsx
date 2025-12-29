import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UndoAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><title>13-arrow</title><path d="M20.9,7.005H2.793L7.1,2.7,5.682,1.288.732,6.237a2.5,2.5,0,0,0,0,3.535l4.95,4.951L7.1,13.309l-4.3-4.3H20.9a1.034,1.034,0,0,1,1.1.95v11.1a1.034,1.034,0,0,1-1.1.949H2v2H20.9A3.031,3.031,0,0,0,24,21.056V9.955A3.031,3.031,0,0,0,20.9,7.005Z"/></svg>

);
