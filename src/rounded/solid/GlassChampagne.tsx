import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassChampagne = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5.633,5l.206-2.272c.142-1.555,1.426-2.728,2.988-2.728h6.348c1.562,0,2.846,1.173,2.988,2.728l.207,2.272H5.633Zm13.364,6.89l-.445-4.89H5.451l-.451,4.981c0,3.52,2.612,6.442,6,6.928v3.091h-3c-.552,0-1,.448-1,1s.448,1,1,1h8c.552,0,1-.448,1-1s-.448-1-1-1h-3v-3.091c3.388-.487,6-3.416,5.996-7.019Z"/></svg>

);
