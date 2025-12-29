import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAlien = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C6.486,0,2,4.486,2,10c0,7.338,8.805,13.178,9.179,13.422l.821.537.821-.537c.375-.245,9.179-6.084,9.179-13.422C22,4.486,17.514,0,12,0Zm0,20.322c-2.008-1.513-7-5.736-7-10.322,0-3.86,3.14-7,7-7s7,3.14,7,7c0,4.586-4.992,8.809-7,10.322Zm2.012-11.31c1.24-1.24,3.968-.992,3.968-.992,0,0,.248,2.728-.992,3.968s-3.968.992-3.968.992c0,0-.248-2.728.992-3.968Zm-4.024,0c1.24,1.24.992,3.968.992,3.968,0,0-2.728.248-3.968-.992s-.992-3.968-.992-3.968c0,0,2.728-.248,3.968.992Z"/></svg>

);
