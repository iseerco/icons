import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramSubtask = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10V3c0-1.65-1.35-3-3-3H3C1.35,0,0,1.35,0,3v7H4v7c0,1.65,1.35,3,3,3h3v1c0,1.65,1.35,3,3,3h8c1.65,0,3-1.35,3-3v-7H10v4h-3c-.55,0-1-.45-1-1v-7H24Z"/></svg>

);
