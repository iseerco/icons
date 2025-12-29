import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowRightToBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5v14c0,2.76-2.24,5-5,5h-3c-.55,0-1-.45-1-1s.45-1,1-1h3c1.65,0,3-1.35,3-3V5c0-1.65-1.35-3-3-3h-3c-.55,0-1-.45-1-1s.45-1,1-1h3c2.76,0,5,2.24,5,5Zm-6,7c0-.8-.31-1.55-.87-2.11l-4.41-4.59c-.38-.4-1.02-.41-1.41-.03-.4,.38-.41,1.02-.03,1.41l4.15,4.31H1c-.55,0-1,.45-1,1s.45,1,1,1H15.42l-4.15,4.31c-.38,.4-.37,1.03,.03,1.41,.19,.19,.44,.28,.69,.28,.26,0,.52-.1,.72-.31l4.4-4.57c.57-.57,.88-1.32,.88-2.12Z"/></svg>

);
