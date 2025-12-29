import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RemoveFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,6v1H0v-3C0,2.35,1.35,1,3,1h5.24l4,2h8.76c1.65,0,3,1.35,3,3ZM0,23H14.03c-.65-1.01-1.03-2.21-1.03-3.5,0-3.59,2.91-6.5,6.5-6.5,1.75,0,3.33,.69,4.5,1.82v-5.82H0v14Zm21.29-6.71l-1.79,1.8-1.79-1.78-1.41,1.42,1.79,1.78-1.77,1.78,1.42,1.41,1.77-1.78,1.79,1.78,1.41-1.42-1.79-1.78,1.79-1.8-1.42-1.41Z"/></svg>

);
