import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowUpSmallBig = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,1V9h8V1h-8Zm7,7h-6V2h6v6Zm-9,15h10V13H14v10Zm1-9h8v8H15V14ZM6.56,.44l4.44,4.44-.71,.71L6,1.29V24h-1V1.29L.72,5.57,.01,4.87,4.44,.44c.58-.58,1.54-.58,2.12,0Z"/></svg>

);
