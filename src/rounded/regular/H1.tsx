import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const H1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14,5v14c0,.553-.448,1-1,1s-1-.447-1-1v-6H4v6c0,.553-.448,1-1,1s-1-.447-1-1V5c0-.553.448-1,1-1s1,.447,1,1v6h8v-6c0-.553.448-1,1-1s1,.447,1,1Zm7.383-.924c-.375-.156-.805-.07-1.09.217l-3,3c-.391.391-.391,1.023,0,1.414s1.023.391,1.414,0l1.293-1.293v11.586c0,.553.448,1,1,1s1-.447,1-1V5c0-.404-.244-.77-.617-.924Z"/></svg>

);
