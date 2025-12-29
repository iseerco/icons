import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Fort = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,0V2h-2V0h-2V2h-2V0h-2V6c0,1.103,.897,2,2,2v3H8v-3c1.103,0,2-.897,2-2V0h-2V2h-2V0h-2V2H2V0H0V6c0,1.103,.897,2,2,2V24H22V8c1.103,0,2-.897,2-2V0h-2Zm-6,13v9h-2v-4c0-1.105-.895-2-2-2s-2,.895-2,2v4h-2V13h8ZM8,4v2H2v-2h6Zm-4,4h2v14h-2V8Zm16,14h-2V8h2v14ZM16,6v-2h6v2h-6Z"/></svg>

);
