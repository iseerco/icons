import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleZ = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.037-9-9S7.037,3,12,3s9,4.037,9,9-4.037,9-9,9Zm4.467-11.46l-5.224,5.46h5.757v3h-7.925c-.842,0-1.594-.503-1.916-1.28s-.146-1.665.449-2.26l5.224-5.46h-5.832v-3h8c.842,0,1.594.503,1.916,1.28s.146,1.665-.449,2.26Z"/></svg>

);
