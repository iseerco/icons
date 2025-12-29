import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrainSubwayTunnel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,8h2v5H6v-2c0-1.654,1.346-3,3-3Zm9,5v-2c0-1.654-1.346-3-3-3h-2v5h5Zm-1.56,11l-1.837-3h-5.205l-1.838,3h8.88ZM12,0C5.383,0,0,5.383,0,12v11c0,.553,.448,1,1,1H5.215l1.902-3.106c-1.781-.404-3.117-1.993-3.117-3.894v-6c0-2.757,2.243-5,5-5h6c2.757,0,5,2.243,5,5v6c0,1.902-1.336,3.49-3.117,3.894l1.902,3.106h4.215c.552,0,1-.447,1-1V12C24,5.383,18.617,0,12,0Zm-4,19h8c1.103,0,2-.897,2-2v-2h-2v1c0,.553-.448,1-1,1s-1-.447-1-1v-1h-4v1c0,.553-.448,1-1,1s-1-.447-1-1v-1h-2v2c0,1.103,.897,2,2,2Z"/></svg>

);
