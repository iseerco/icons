import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,10c-.713,0-1.372,.203-1.953,.531,.227-1.431,1.459-2.531,2.953-2.531h2v-2h-2c-2.757,0-5,2.243-5,5v3c0,2.206,1.794,4,4,4s4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2ZM21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551,.449-1,1-1H21c.551,0,1,.449,1,1V22Z"/></svg>

);
