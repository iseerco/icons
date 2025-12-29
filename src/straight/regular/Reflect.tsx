import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Reflect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13H0V11H24ZM8.886.427l-.1-.068A2.5,2.5,0,0,0,5,2.5V9H19.916ZM7,2.5a.5.5,0,0,1,.718-.45L14.084,7H7ZM8.787,23.641,19.916,15H5v6.5a2.494,2.494,0,0,0,3.787,2.143ZM14.084,17,7.718,21.948A.5.5,0,0,1,7,21.5V17Z"/></svg>

);
