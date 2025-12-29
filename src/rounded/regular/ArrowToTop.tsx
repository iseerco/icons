import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,2.031h4.517a2.492,2.492,0,0,0-.285.232l-4.95,4.95A1,1,0,0,0,6.7,8.627l4.3-4.3V23a1,1,0,0,0,2,0V4.324l4.3,4.3a1,1,0,0,0,1.414-1.414l-4.95-4.95a2.492,2.492,0,0,0-.285-.232H18a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2Z"/></svg>

);
