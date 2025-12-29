import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TextInputLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9,3h-2c0-.552-.449-1-1-1h-1.5S4.5,0,4.5,0h1.5c.771,0,1.468,.301,2,.78C8.532,.301,9.229,0,10,0h1.5s0,2,0,2h-1.5c-.551,0-1,.448-1,1ZM0,6v15H7V3H3C1.346,3,0,4.346,0,6Zm6,16h-1.5v2h1.5c.771,0,1.468-.301,2-.78,.532,.48,1.229,.78,2,.78h1.5v-2h-1.5c-.551,0-1-.448-1-1h-2c0,.552-.449,1-1,1ZM9,3h12c1.654,0,3,1.346,3,3v15s-15,0-15,0V3Zm4,6h3s0,8,0,8h2V9s3,0,3,0v-2H13v2Z"/>
</svg>

);
