import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UsbPendrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,9H6a2,2,0,0,0-2,2v5a8,8,0,0,0,16,0V11A2,2,0,0,0,18,9Z"/><path d="M18,0H6V7H18ZM11,5H9V3h2Zm4,0H13V3h2Z"/></svg>

);
