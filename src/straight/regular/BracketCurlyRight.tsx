import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketCurlyRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24h-4v-2h4c.55,0,1-.45,1-1v-6.41l2.59-2.59-2.59-2.59V3c0-.55-.45-1-1-1h-4V0h4c1.65,0,3,1.35,3,3v5.59l3.41,3.41-3.41,3.41v5.59c0,1.65-1.35,3-3,3Z"/></svg>

);
