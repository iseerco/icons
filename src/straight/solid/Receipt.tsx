import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Receipt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,0H6A3,3,0,0,0,3,3V23.9l3.67-2.51,2.671,1.826,2.666-1.826,2.666,1.826,2.664-1.825L21,23.9V3A3,3,0,0,0,18,0ZM15,14H7V12h8Zm2-5H7V7H17Z"/></svg>

);
