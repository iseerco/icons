import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareY = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.552.449-1,1-1h18c.551,0,1,.448,1,1v19Zm-3.641-17l-5.359,7.318v6.682h-2v-6.663l-5.385-7.337h2.48l3.898,5.309,3.884-5.309h2.48Z"/></svg>

);
