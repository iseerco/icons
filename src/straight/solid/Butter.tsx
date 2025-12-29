import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Butter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17,15H1V5c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v10Zm3-13h-2.003c.629.836,1.003,1.875,1.003,3v10h4V5c0-1.654-1.346-3-3-3ZM0,17v2h1c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3h1v-2H0Z"/>
</svg>

);
