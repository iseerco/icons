import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Down = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24h0c-.8,0-1.56-.31-2.12-.88h0S.07,13,.07,13H7V0h10V13h6.95l-9.82,10.11c-.58,.58-1.33,.89-2.13,.89Z"/></svg>

);
