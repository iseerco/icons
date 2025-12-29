import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Fort = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,7c1.103,0,2-.897,2-2V0h-2V2h-2V0h-2V2H2V0H0V5c0,1.103,.897,2,2,2h6Z"/><rect x="2" y="9" width="6" height="15"/><g><path d="M14,11h-4v8c0-1.103,.897-2,2-2s2,.897,2,2V11Z"/><rect x="16" y="9" width="6" height="15"/></g><path d="M22,0V2h-2V0h-2V2h-2V0h-2V5c0,1.103,.897,2,2,2h6c1.103,0,2-.897,2-2V0h-2Z"/></svg>

);
