import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSplit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.28,16.74l-3.71-3.79-2.14,2.1,1.91,1.95h-4.96c-.14,0-.27-.06-.37-.16l-4.47-4.84,4.47-4.84c.09-.1,.23-.16,.37-.16h4.96l-1.91,1.95,2.14,2.1,3.7-3.78c.97-.97,.97-2.56,0-3.54L19.52-.02l-2.12,2.12,1.9,1.9h-4.92c-.97,0-1.91,.41-2.57,1.13l-4.96,5.37H0v3H6.84l4.96,5.37c.66,.72,1.6,1.13,2.57,1.13h4.96l-1.91,1.95,2.14,2.1,3.7-3.78c.97-.97,.97-2.56,.01-3.52Z"/></svg>

);
