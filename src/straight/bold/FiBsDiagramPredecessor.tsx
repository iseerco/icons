import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiagramPredecessor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,14v6.5c0,1.93,1.57,3.5,3.5,3.5H20.5c1.93,0,3.5-1.57,3.5-3.5v-6.5H0Zm21,6.5c0,.28-.22,.5-.5,.5H3.5c-.28,0-.5-.22-.5-.5v-3.5H21v3.5ZM13,10H0V3C0,1.35,1.35,0,3,0h7c1.65,0,3,1.35,3,3h4.5c1.93,0,3.5,1.57,3.5,3.5v1.5h2.5l-3.16,3.65c-.44,.49-1.22,.49-1.66,0l-3.18-3.65h2.5v-1.5c0-.28-.22-.5-.5-.5h-4.5v4Z"/></svg>

);
