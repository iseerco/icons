import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BurgerGlass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,16v1H8v-1c0-2.21,1.79-4,4-4h8c2.21,0,4,1.79,4,4Zm-7,5l-3-2h-6v1c0,2.21,1.79,4,4,4h8c2.21,0,4-1.79,4-4v-1h-4l-3,2ZM.18,5H17.81l.17-1.66c.1-.85-.17-1.7-.74-2.34s-1.38-1-2.24-1H3C2.15,.01,1.33,.38,.76,1.01,.19,1.65-.08,2.5,.02,3.34l.17,1.66Zm.2,2l1.71,17H7.54c-.95-1.06-1.54-2.46-1.54-4v-4c0-3.31,2.69-6,6-6h5.31l.3-3H.39Z"/></svg>

);
