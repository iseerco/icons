import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Skull = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.749.024c-3.079-.2-6.01.841-8.258,2.944C2.272,5.044,1,7.971,1,11v6c0,1.654,1.346,3,3,3h2v4h12v-4h2c1.654,0,3-1.346,3-3v-5.647C23,5.384,18.497.408,12.749.024Zm-4.749,12.976c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Zm4,4.997c-1.105,0-2,.105-2-1s.895-3,2-3,2,1.895,2,3-.895,1-2,1Zm4-4.997c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Z"/></svg>

);
