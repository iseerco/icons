import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsReflectVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,9c.74,0,1.45-.32,1.93-.86L21.38,0H2.62l7.44,8.13c.5,.55,1.2,.87,1.94,.87Zm2.57-6l-2.57,2.81-2.57-2.81h5.15Zm-4.51,12.85L2.62,24H21.38l-7.44-8.13c-.99-1.1-2.91-1.09-3.88-.01Zm13.93-5.35v3H0v-3H24Z"/></svg>

);
