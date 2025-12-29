import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RedoAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.318,14.718l4.95-4.95a2.5,2.5,0,0,0,0-3.536l-4.95-4.95L16.9,2.7l4.3,4.3H3.1A3.031,3.031,0,0,0,0,9.95v11.1A3.031,3.031,0,0,0,3.1,24H22V22H3.1A1.034,1.034,0,0,1,2,21.05V9.95A1.034,1.034,0,0,1,3.1,9H21.207l-4.3,4.3Z"/></svg>

);
