import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareN = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551.449-1,1-1h18c.551,0,1,.449,1,1v19Zm-6-17h2v12.307c0,.758-.488,1.41-1.215,1.623-.161.048-.324.07-.484.07-.564,0-1.097-.282-1.417-.778l-6.884-10.498v11.276h-2V6.694c0-.758.489-1.411,1.216-1.624.728-.214,1.491.071,1.9.709l6.884,10.498V5Z"/></svg>

);
