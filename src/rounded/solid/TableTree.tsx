import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,7H0C0,4.243,2.243,2,5,2h14c2.757,0,5,2.243,5,5Zm0,2v8c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9H5v7c0,1.103,.897,2,2,2h4c.553,0,1-.447,1-1s-.447-1-1-1H7v-2h2c.553,0,1-.447,1-1s-.447-1-1-1h-2v-3H24Zm-11,5h2c.553,0,1-.447,1-1s-.447-1-1-1h-2c-.553,0-1,.447-1,1s.447,1,1,1Zm5,3c0-.553-.447-1-1-1h-2c-.553,0-1,.447-1,1s.447,1,1,1h2c.553,0,1-.447,1-1Z"/></svg>

);
