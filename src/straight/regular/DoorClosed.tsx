import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DoorClosed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,22V3c0-1.654-1.346-3-3-3H7c-1.654,0-3,1.346-3,3V22H0v2H24v-2h-4ZM6,3c0-.551,.448-1,1-1h10c.552,0,1,.449,1,1V22H6V3Zm10,9c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/></svg>

);
