import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClipboardPrescription = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.829,2c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416.836-2.829,2H3v19c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V2h-5.171Zm3.171,19c0,.551-.449,1-1,1H6c-.551,0-1-.449-1-1V4h5v-1c0-.551.449-1,1-1h2c.551,0,1,.449,1,1v1h5v17Zm-6.772-8.264c1.044-.47,1.772-1.519,1.772-2.736,0-1.654-1.346-3-3-3h-2c-1.103,0-2,.897-2,2v7h2v-3h1.131l2.29,3.429-2.421,3.571h2.194l1.324-1.928,1.288,1.928h2.194l-2.35-3.577,2.35-3.423h-2.255l-1.19,1.756-1.327-2.02Zm-3.228-3.736h2c.551,0,1,.449,1,1s-.449,1-1,1h-2v-2Z"/></svg>

);
