import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSortShapesUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14,23h9V14H14v9Zm1-8h7v7h-7v-7ZM18.52,.71l-5.12,9.29h10.19L18.52,.71Zm0,2.08l3.39,6.21h-6.81l3.42-6.21ZM6.56,.44l4.44,4.44-.71,.71L6,1.29V24h-1V1.29L.72,5.57,.01,4.87,4.44,.44c.58-.58,1.54-.58,2.12,0Z"/></svg>

);
