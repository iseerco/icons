import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M2,14a2,2,0,0,1-2-2V11A2,2,0,0,1,2,9V6h9v8ZM18.35.83a24.742,24.742,0,0,0-12.7,0A5.057,5.057,0,0,0,2.287,4H21.713A5.057,5.057,0,0,0,18.35.83ZM18,17a1,1,0,0,1-2,0V16H8v1a1,1,0,0,1-2,0V16H2v1a4.98,4.98,0,0,0,2,3.975V21.5a2.5,2.5,0,0,0,4.949.5h6.1A2.5,2.5,0,0,0,20,21.5v-.525A4.98,4.98,0,0,0,22,17V16H18Zm4-8V6H13v8h9a2,2,0,0,0,2-2V11A2,2,0,0,0,22,9Z"/></svg>

);
