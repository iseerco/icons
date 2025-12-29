import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVideoCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8.75l-3,2.237V9a3,3,0,0,0-3-3H15.679l-5.52-6H0V3H8.842L11.6,6H3A3,3,0,0,0,0,9V24H21V19.013l3,2.237ZM18,21H3V9H18Z"/></svg>

);
