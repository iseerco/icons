import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiagramCells = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10H0V3.5C0,1.57,1.57,0,3.5,0H20.5c1.93,0,3.5,1.57,3.5,3.5v6.5ZM3,7H21V3.5c0-.28-.22-.5-.5-.5H3.5c-.28,0-.5,.22-.5,.5v3.5ZM20.5,24H3.5c-1.93,0-3.5-1.57-3.5-3.5v-6.5H24v6.5c0,1.93-1.57,3.5-3.5,3.5ZM3,17v3.5c0,.28,.22,.5,.5,.5H20.5c.28,0,.5-.22,.5-.5v-3.5H3Z"/></svg>

);
