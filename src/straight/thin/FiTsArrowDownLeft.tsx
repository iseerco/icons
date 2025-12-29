import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.99,.71L23.29,0,1,22.29V10H0v12.5c0,.83,.67,1.5,1.5,1.5H14v-1H1.71L23.99,.71Z"/></svg>

);
