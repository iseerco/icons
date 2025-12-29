import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Columns3 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7,22H0V5c0-1.654,1.346-3,3-3h4v20Zm2,0h6V2h-6v20ZM21,2h-4v20h7V5c0-1.654-1.346-3-3-3Z"/></svg>

);
