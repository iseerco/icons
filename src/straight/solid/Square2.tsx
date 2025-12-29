import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Square2 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3ZM12.177,14.928c-.699,.404-1.258,.737-1.634,1.072h5.457v2H8v-1c0-1.97,1.688-2.944,3.177-3.804,1.756-1.014,2.823-1.735,2.823-3.196,0-1.103-.897-2-2-2s-2,.897-2,2h-2c0-2.206,1.794-4,4-4s4,1.794,4,4c0,2.721-2.119,3.945-3.823,4.928Z"/></svg>

);
