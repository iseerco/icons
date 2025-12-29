import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TableLayout = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,7C0,4.243,2.243,2,5,2h14c2.757,0,5,2.243,5,5H0Zm7,2H0v8c0,2.757,2.243,5,5,5h2V9Zm2,0v13h10c2.757,0,5-2.243,5-5V9H9Z"/></svg>

);
