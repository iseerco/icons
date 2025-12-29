import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsVectorPolygon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,9.207l3.207-3.207h4.793V0h-6v2H6V0H0v6h2v12H0v6h6v-2h12v2h6v-6h-4.793l-3.207-3.207v-5.586Zm-1,.793v4h-4v-4h4ZM19,1h4v4h-4V1ZM1,1h4v4H1V1Zm4,22H1v-4h4v4Zm1-2v-3h-3V6h3v-3h12v2.793l-3.207,3.207h-4.793v6h4.793l3.207,3.207v2.793H6Zm17,2h-4v-4h4v4Z"/>
</svg>

);
