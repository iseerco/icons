import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsExpandArrows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9V2.5A2.5,2.5,0,0,0,21.5,0H15V3h3.879L12,9.879,5.121,3H9V0H2.5A2.5,2.5,0,0,0,0,2.5V9H3V5.121L9.879,12,3,18.879V15H0v6.5A2.5,2.5,0,0,0,2.5,24H9V21H5.121L12,14.121,18.879,21H15v3h6.5A2.5,2.5,0,0,0,24,21.5V15H21v3.879L14.121,12,21,5.121V9Z"/></svg>

);
