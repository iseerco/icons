import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectabgleVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,0H8A5,5,0,0,0,3,5V19a5,5,0,0,0,5,5h8a5,5,0,0,0,5-5V5A5,5,0,0,0,16,0Zm3,19a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3V5A3,3,0,0,1,8,2h8a3,3,0,0,1,3,3Z"/></svg>

);
