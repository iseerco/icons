import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPhoneFlip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.35,3.05L19.39,.09l-5.84,5.84,3.48,3.48c-1.54,3.64-4.1,6.2-7.62,7.63l-3.48-3.48L.09,19.39l2.96,2.96c1.06,1.06,2.5,1.65,4.05,1.65,7.42,0,16.89-9.47,16.89-16.89,0-1.55-.59-2.99-1.65-4.06ZM7.11,23c-1.29,0-2.47-.48-3.35-1.36l-2.25-2.25,4.42-4.42,3.23,3.23,.3-.12c4.04-1.54,6.94-4.44,8.61-8.61l.12-.31-3.24-3.24L19.39,1.51l2.25,2.25c.88,.87,1.36,2.06,1.36,3.35,0,6.83-9.06,15.89-15.89,15.89Z"/></svg>

);
