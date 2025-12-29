import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Down = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24h0c-.8,0-1.56-.31-2.12-.88h0S.07,13,.07,13H7V0h10V13h6.95l-9.82,10.11c-.58,.58-1.33,.89-2.13,.89Zm-.71-2.29c.19,.19,.44,.29,.7,.29h0c.27,0,.52-.1,.71-.29l6.51-6.71h-4.22V2h-6V15H4.79l6.5,6.71Z"/></svg>

);
