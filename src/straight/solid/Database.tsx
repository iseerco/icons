import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Database = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,1H10.037V4H8V1H6V4H3.963V1H2A2,2,0,0,0,0,3V5A2,2,0,0,0,2,7H22a2,2,0,0,0,2-2V3A2,2,0,0,0,22,1Z"/><path d="M22,9H10.037v3H8V9H6v3H3.963V9H2a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V11A2,2,0,0,0,22,9Z"/><path d="M22,17H10.037v3H8V17H6v3H3.963V17H2a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V19A2,2,0,0,0,22,17Z"/></svg>

);
