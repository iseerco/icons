import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAttributionPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,17.5c0,.83,.67,1.5,1.5,1.5h3c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5H0v-1H19.5c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5h-3c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5h7.5v1h-7.5c-.83,0-1.5,.67-1.5,1.5Zm-4.92,.06L.1,19.9,2.44,9.92l5.72-1.8L15.52,.77c1.02-1.02,2.69-1.02,3.71,0,1.02,1.02,1.02,2.69,0,3.71l-7.36,7.36-1.8,5.72Zm-.94-9l2.3,2.3,7.09-7.09c.63-.63,.63-1.67,0-2.3-.63-.63-1.67-.63-2.3,0l-7.09,7.09Zm.16,8.15l1.57-5.01-2.58-2.58-5.01,1.57-1.62,6.93,4.49-4.49,.71,.71-4.49,4.49,6.93-1.62Z"/></svg>

);
