import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowToRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.985,6.015v4.518a2.417,2.417,0,0,0-.233-.285L16.8,5.3a1,1,0,1,0-1.414,1.414l4.3,4.3H1.015a1,1,0,0,0,0,2H19.692l-4.3,4.3A1,1,0,1,0,16.8,18.733l4.95-4.95a2.5,2.5,0,0,0,.233-.285v4.517a1,1,0,0,0,2,0v-12a1,1,0,0,0-2,0Z"/></svg>

);
