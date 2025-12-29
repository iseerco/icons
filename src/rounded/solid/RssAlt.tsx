import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RssAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,24c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm21-1C24,10.318,13.682,0,1,0,.448,0,0,.448,0,1s.448,1,1,1c11.58,0,21,9.42,21,21,0,.552.448,1,1,1s1-.448,1-1Zm-9,0c0-7.72-6.28-14-14-14-.552,0-1,.448-1,1s.448,1,1,1c6.617,0,12,5.383,12,12,0,.552.448,1,1,1s1-.448,1-1Z"/></svg>

);
