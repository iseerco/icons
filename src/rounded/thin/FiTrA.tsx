import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrA = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.964,23.315L15.679,2.497c-1.143-3.3-6.214-3.3-7.356-.002L.036,23.315c-.103,.257,.023,.547,.279,.649,.258,.104,.548-.023,.649-.279l3.059-7.685h15.954l3.059,7.685c.102,.259,.399,.381,.649,.279,.256-.102,.382-.393,.279-.649ZM4.421,15L9.252,2.862c1.114-2.533,4.384-2.533,5.497,.002l4.83,12.135H4.421Z"/></svg>

);
