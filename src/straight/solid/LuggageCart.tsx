import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LuggageCart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.5,19c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5Zm9.5,2.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5Zm5-14.5V15H8V7c0-1.654,1.346-3,3-3V13h2V2c0-1.103,.897-2,2-2h2c1.103,0,2,.897,2,2V13h2V4c1.654,0,3,1.346,3,3Zm-7-5h-2v2h2V2ZM6,16V3c0-1.654-1.346-3-3-3H0V2H3c.552,0,1,.449,1,1v13c0,1.654,1.346,3,3,3H24v-2H7c-.552,0-1-.449-1-1Z"/></svg>

);
