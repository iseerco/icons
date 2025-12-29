import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Briefcase = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="13 14 13 16 11 16 11 14 0 14 0 24 24 24 24 14 13 14"/><path d="M24,12V7a3,3,0,0,0-3-3H18V2a2,2,0,0,0-2-2H8A2,2,0,0,0,6,2V4H3A3,3,0,0,0,0,7v5ZM8,2h8V4H8Z"/></svg>

);
