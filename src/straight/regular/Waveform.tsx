import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Waveform = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,11v2h-.809l-2.884,7.633-2.299-9.146-3.095,12.534-2.914-14.085-2.914,14.085-3.095-12.534-2.299,9.146L.809,13h-.809v-2h2.191l1.116,2.957L6.009,3.213l2.905,11.767L12,.064l3.086,14.915,2.905-11.767,2.701,10.744,1.116-2.957h2.191Z"/></svg>

);
