import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashUndoAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,4v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H2v2h2v15c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3V6h2v-2h-5Zm-8-2h6v2h-6v-2Zm7,16.998h-2v-4c0-.551-.448-1-1-1h-3.008l2.302,2.291-1.414,1.414-3.299-3.298c-.775-.776-.775-2.037,0-2.812l3.299-3.299,1.414,1.414-2.291,2.291h2.997c1.654,0,3,1.346,3,3v4Z"/></svg>

);
