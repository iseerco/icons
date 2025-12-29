import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsExplosion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19.118,15L24.029-.07,13.934,9.168,8,.784V10.91L-.001,8.21l4.812,7.79H.285l6.708,8h10.898l6.193-9h-4.966Zm-2.804,6h-7.922l-1.677-2h3.474l-3.265-5.286,4.076,1.376v-4.874l2.451,3.462,4.193-3.838-2.659,8.16h3.393l-2.064,3Zm6.069,0h1.617v3h-3.681l2.064-3Zm-20.516,0l2.516,3H0v-3H1.867Z"/>
</svg>

);
