import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Catalog = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,6h-2V0H3C1.346,0,0,1.346,0,3v15h5v6h19v-15c0-1.654-1.346-3-3-3Zm-10.764,0l6.764-3.382v3.382h-6.764ZM2,16V3c0-.552.448-1,1-1h10.764L5,6.382v9.618h-3Zm20,6H7v-14h14c.552,0,1,.448,1,1v13Zm-7-11h5v2h-5v-2Zm-6-1h4v4h-4v-4Zm6,7h5v2h-5v-2Zm-6-1h4v4h-4v-4Z"/>
</svg>

);
