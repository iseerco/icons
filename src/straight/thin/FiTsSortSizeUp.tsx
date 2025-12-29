import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSortSizeUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,23h8V15h-8v8Zm1-7h6v6h-6v-6ZM14,1V11h10V1H14Zm9,9H15V2h8V10ZM6.56,.44l4.44,4.44-.71,.71L6,1.29V24h-1V1.29L.72,5.57,.01,4.87,4.44,.44c.58-.58,1.54-.58,2.12,0Z"/></svg>

);
