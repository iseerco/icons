import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FilePrescription = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.414,0H5c-1.654,0-3,1.346-3,3v21h20V7.586L14.414,0Zm.586,3.414l3.586,3.586h-3.586v-3.586ZM4,22V3c0-.551.449-1,1-1h8v7h7v13H4Zm8.745-8l-1.19,1.756-1.327-2.02c1.044-.47,1.772-1.519,1.772-2.736,0-1.654-1.346-3-3-3h-2c-1.103,0-2,.897-2,2v6h2v-2h1.131l2.29,3.429-2.421,3.571h2.194l1.324-1.928,1.288,1.928h2.194l-2.35-3.577,2.35-3.423h-2.255Zm-5.745-4h2c.551,0,1,.449,1,1s-.449,1-1,1h-2v-2Z"/></svg>

);
