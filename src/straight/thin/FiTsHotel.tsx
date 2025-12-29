import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHotel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0H5.5c-1.378,0-2.5,1.122-2.5,2.5V24h7v-7h4v7h7V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,23h-5v-6h2v-1H7v1h2v6H4V2.5c0-.827,.673-1.5,1.5-1.5h13c.827,0,1.5,.673,1.5,1.5V23ZM7,12h2v1h-2v-1Zm8,0h2v1h-2v-1ZM7,4h2v1h-2v-1Zm8,0h2v1h-2v-1ZM7,8h2v1h-2v-1Zm8,0h2v1h-2v-1Zm-4,4h2v1h-2v-1Zm0-8h2v1h-2v-1Zm0,4h2v1h-2v-1Z"/></svg>

);
