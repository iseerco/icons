import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSendBack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,12h-2.5v-2.5c0-1.93-1.57-3.5-3.5-3.5h-2.5v-2.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5v8.5h6v6h6v6h12v-8.5c0-1.93-1.57-3.5-3.5-3.5ZM3,3.5c0-.275.224-.5.5-.5h5c.276,0,.5.225.5.5v5.5H3V3.5Zm18,17.5h-6v-6h5.5c.276,0,.5.225.5.5v5.5Z"/></svg>

);
