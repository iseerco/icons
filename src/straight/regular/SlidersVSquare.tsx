import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SlidersVSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.552.448-1,1-1h18c.552,0,1,.448,1,1v19Zm-13-14h2v2h-2v9h-2v-9h-2v-2h2v-3h2v3Zm8,6h2v2h-2v3h-2v-3h-2v-2h2V5h2v9Z"/></svg>

);
