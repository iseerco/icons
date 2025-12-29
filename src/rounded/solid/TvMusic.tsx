import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TvMusic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,2H5C2.243,2,0,4.243,0,7v7c0,2.757,2.243,5,5,5h6v1h-3c-.552,0-1,.447-1,1s.448,1,1,1h8c.553,0,1-.447,1-1s-.447-1-1-1h-3v-1h6c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-4,6h-1v4.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5c.171,0,.338,.018,.5,.05v-2.05c0-1.103,.897-2,2-2h1c.553,0,1,.448,1,1s-.447,1-1,1Z"/></svg>

);
