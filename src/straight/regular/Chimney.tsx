import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Chimney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3v6h3v15h18v-15h3V3Zm-15,6v6h-4v-6h4Zm-4,8h8v5H5v-5Zm10,5v-5h4v5h-4Zm4-7h-8v-6h8v6Zm3-8H2V3c0-.551.449-1,1-1h18c.551,0,1,.449,1,1v4Z"/>
</svg>

);
