import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Shelves = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.5,0c-1.381,0-2.5,1.119-2.5,2.5v4.5H2V1c0-.552-.448-1-1-1h0C.448,0,0,.448,0,1v22c0,.552.448,1,1,1h0c.552,0,1-.448,1-1v-2h20v2c0,.552.448,1,1,1h0c.552,0,1-.448,1-1V1c0-.552-.448-1-1-1h-5.5Zm4.5,19h-4v-5c0-1.105-.895-2-2-2h-4c-1.105,0-2,.895-2,2v5h-2v-5c0-1.105-.895-2-2-2H2v-3h20v10Z"/>
</svg>

);
