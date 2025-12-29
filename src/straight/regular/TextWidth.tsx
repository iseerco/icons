import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TextWidth = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,5h-2V3c0-1.65,1.35-3,3-3h10c1.65,0,3,1.35,3,3v2h-2V3c0-.55-.45-1-1-1h-4V15h-2V2H7c-.55,0-1,.45-1,1v2Zm17.42,12.55l-3.26-3.26-1.41,1.41,2.3,2.29H2.96l2.29-2.29-1.41-1.41-3.26,3.25c-.38,.38-.58,.88-.58,1.41s.21,1.03,.58,1.41l3.26,3.26,1.41-1.41-2.21-2.2H20.95l-2.2,2.2,1.41,1.41,3.26-3.25c.38-.38,.58-.88,.58-1.41s-.21-1.03-.58-1.41Z"/></svg>

);
