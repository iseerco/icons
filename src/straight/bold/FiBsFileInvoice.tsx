import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileInvoice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.381,0H5c-1.654,0-3,1.346-3,3V24H22V5.665L16.381,0ZM5,21V3H14v5h5v13H5Zm2-6h10v4H7v-4Zm5-2H7v-3h5v3Zm0-5H7v-3h5v3Z"/></svg>

);
