import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tubes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,1c0-.553.448-1,1-1h8c.552,0,1,.447,1,1s-.448,1-1,1v7h-8V2c-.552,0-1-.447-1-1Zm1,10v9c0,2.206,1.794,4,4,4s4-1.794,4-4v-9h-8ZM2,2v7h8V2c.552,0,1-.447,1-1s-.448-1-1-1H2c-.552,0-1,.447-1,1s.448,1,1,1Zm0,9v9c0,2.206,1.794,4,4,4s4-1.794,4-4v-9H2Z"/></svg>

);
