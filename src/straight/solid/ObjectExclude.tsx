import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ObjectExclude = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,11v5H0V3C0,1.35,1.35,0,3,0H13c1.65,0,3,1.35,3,3v5h-5c-1.65,0-3,1.35-3,3Zm13-3h-5v8H8v8H24V11c0-1.65-1.35-3-3-3Z"/></svg>

);
