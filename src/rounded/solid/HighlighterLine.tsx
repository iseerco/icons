import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HighlighterLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,24H5c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1ZM2.48,11.89c-.31,.73-.48,1.53-.48,2.34v4.35l-1.71,1.71c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29l1.71-1.71H7.76c.81,0,1.61-.17,2.34-.48L2.48,11.89ZM20.91,7.83l-8.67,10.15c-.13,.15-.27,.29-.42,.42L3.59,10.17c.13-.14,.27-.28,.42-.41L14.17,1.1c1.78-1.54,4.47-1.45,6.14,.21l.39,.39c1.66,1.66,1.76,4.36,.22,6.13Z"/></svg>

);
