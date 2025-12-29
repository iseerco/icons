import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashUndo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,4v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H1v2h1.643l1.704,15.331c.169,1.521,1.45,2.669,2.981,2.669h9.305c1.53,0,2.812-1.147,2.982-2.669l1.703-15.331h1.682v-2h-6Zm-8-2h6v2h-6v-2Zm7,17h-2v-4c0-.551-.448-1-1-1h-3.008l2.302,2.291-1.414,1.414-3.299-3.298c-.774-.775-.774-2.037,0-2.812l3.3-3.299,1.414,1.414-2.291,2.291h2.997c1.654,0,3,1.346,3,3v4Z"/></svg>

);
