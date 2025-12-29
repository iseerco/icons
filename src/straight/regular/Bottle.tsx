import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Bottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.114,8.568,15,7.323V2h1V0H8V2H9V7.323L5.886,8.568A2.987,2.987,0,0,0,4,11.354V24H20V11.354A2.988,2.988,0,0,0,18.114,8.568ZM18,22H6V11.354a.994.994,0,0,1,.629-.928L11,8.677V2h2V8.677l4.371,1.748a1,1,0,0,1,.629.929ZM8,19h8V13H8Zm2-4h4v2H10Z"/></svg>

);
