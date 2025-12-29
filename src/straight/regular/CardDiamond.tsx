import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardDiamond = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,0H6c-1.654,0-3,1.346-3,3v21h18V3c0-1.654-1.346-3-3-3Zm1,22H5V3c0-.551.449-1,1-1h12c.551,0,1,.449,1,1v19Zm-7-15l3.5,5-3.5,5-3.5-5,3.5-5Z"/>
</svg>

);
