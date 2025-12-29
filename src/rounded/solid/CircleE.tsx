import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1.5,11c.553,0,1,.448,1,1s-.447,1-1,1h-5v2c0,.551.448,1,1,1h6c.553,0,1,.448,1,1s-.447,1-1,1h-6c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h6c.553,0,1,.448,1,1s-.447,1-1,1h-6c-.552,0-1,.449-1,1v2h5Z"/></svg>

);
