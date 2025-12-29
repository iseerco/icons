import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilePrescription = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,12h-2v-2h2c.551,0,1,.449,1,1s-.449,1-1,1Zm13-5v17H2V3c0-1.657,1.343-3,3-3h10v7h7Zm-9.35,10.423l2.35-3.423h-2.255l-1.19,1.756-1.33-2.024c1.044-.47,1.775-1.515,1.775-2.732,0-1.654-1.346-3-3-3h-2c-1.103,0-2,.897-2,2v6h2v-2h1.131l2.29,3.429-2.421,3.571h2.194l1.324-1.928,1.288,1.928h2.194l-2.35-3.577ZM17,.586v4.414h4.414L17,.586Z"/></svg>

);
