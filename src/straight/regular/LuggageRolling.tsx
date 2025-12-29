import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LuggageRolling = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,8H17V3a3,3,0,0,0-3-3H10A3,3,0,0,0,7,3V8H3a3,3,0,0,0-3,3V22H2v2H4V22H20v2h2V22h2V11A3,3,0,0,0,21,8ZM9,3a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V8H9ZM22,20H2V11a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1ZM7,12H17v2H7Z"/></svg>

);
