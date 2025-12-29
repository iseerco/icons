import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RewindButtonCircle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M10,14.085l-3.177-2.085,3.177-2.085v4.17Zm6-4.17l-3.177,2.085,3.177,2.085v-4.17Zm8,2.085c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-6-5.789l-6,3.937v-3.937L3.177,12l8.823,5.789v-3.937l6,3.937V6.211Z"/>
</svg>

);
