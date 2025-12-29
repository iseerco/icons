import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrainSubwayTunnel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.837,21l-1.837,3h8l-1.837-3h-4.325Zm6.163-12h-3v4h5v-2c0-1.103-.897-2-2-2Zm2,6h-2v1c0,.553-.448,1-1,1s-1-.447-1-1v-1h-4v1c0,.553-.448,1-1,1s-1-.447-1-1v-1h-2v4h12v-4ZM12,0C5.383,0,0,5.383,0,12v12H5.655l1.837-3h-3.492V11c0-2.206,1.794-4,4-4h8c2.206,0,4,1.794,4,4v10h-3.492l1.837,3h5.655V12C24,5.383,18.617,0,12,0ZM6,11v2h5v-4h-3c-1.103,0-2,.897-2,2Z"/></svg>

);
