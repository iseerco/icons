import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TextBoxEdit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14,2h-1.5V0h1.5c.771,0,1.468.301,2,.78.532-.48,1.229-.78,2-.78h1.5v2h-1.5c-.551,0-1,.448-1,1h-2c0-.552-.449-1-1-1Zm7,1h-4v18h7V6c0-1.654-1.346-3-3-3Zm-4,18h-2c0,.552-.449,1-1,1h-1.5v2h1.5c.771,0,1.468-.301,2-.78.532.48,1.229.78,2,.78h1.5v-2h-1.5c-.551,0-1-.448-1-1Zm-2,0H0V6c0-1.654,1.346-3,3-3h12v18Zm-4-14H3v2h3v8h2v-8h3v-2Z"/>
</svg>

);
