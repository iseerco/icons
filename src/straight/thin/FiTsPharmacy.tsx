import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPharmacy = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,24h-8v-8H0v-5.5c0-1.378,1.122-2.5,2.5-2.5h5.5V2.5c0-1.378,1.122-2.5,2.5-2.5h3c1.378,0,2.5,1.122,2.5,2.5v5.5h5.5c1.378,0,2.5,1.122,2.5,2.5v5.5h-8v8Zm-7-1h6v-8h8v-4.5c0-.827-.673-1.5-1.5-1.5h-6.5V2.5c0-.827-.673-1.5-1.5-1.5h-3c-.827,0-1.5.673-1.5,1.5v6.5H2.5c-.827,0-1.5.673-1.5,1.5v4.5h8v8Z"/>
</svg>

);
