import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightSwitchOn = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,0H5c-1.654,0-3,1.346-3,3V24H22V3c0-1.654-1.346-3-3-3Zm1,22H4V3c0-.551,.449-1,1-1h14c.551,0,1,.449,1,1V22Zm-13-4c0,1.103,.897,2,2,2h6c1.103,0,2-.897,2-2V4H7v14Zm2-2v-3h6v3h-6ZM15,6v5h-6V6h6Z"/></svg>

);
