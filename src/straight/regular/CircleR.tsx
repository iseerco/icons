import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleR = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5,10c0-2.206-1.794-4-4-4h-3.5c-1.379,0-2.5,1.121-2.5,2.5v9.5h2v-4h2.804l2.393,4h2.303l-2.456-4.138c1.701-.46,2.956-2.017,2.956-3.862Zm-4,2h-4v-3.5c0-.275.225-.5.5-.5h3.5c1.103,0,2,.897,2,2s-.897,2-2,2ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Z"/></svg>

);
