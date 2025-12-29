import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPenNibSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.26,17.14l1.83-5.6,2.87-2.87-2.12-2.12-2.07,2.07-4.38-4.38,2.07-2.07L15.34,.04l-2.87,2.87-5.6,1.83L2.16,.04,.04,2.16,21.84,23.96l2.12-2.12-4.7-4.7ZM12.86,5.94l5.2,5.2-1.18,3.62-7.63-7.63,3.62-1.18Zm.08,11.94l2.5,2.5L0,24,3.62,8.57l2.5,2.5-1.44,6.14,2.34-2.34c.05-.77,.54-1.41,1.21-1.69l2.6,2.6c-.29,.67-.92,1.16-1.69,1.21l-2.34,2.34,6.14-1.44Z"/></svg>

);
