import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Skull = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.749.024c-3.079-.2-6.01.841-8.258,2.944C2.272,5.044,1,7.971,1,11v4c0,2.421,1.729,4.445,4.018,4.903.205,2.293,2.136,4.097,4.482,4.097h5c2.346,0,4.277-1.804,4.482-4.097,2.289-.458,4.018-2.482,4.018-4.903v-3.647C23,5.384,18.497.408,12.749.024Zm-4.749,12.976c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Zm4,4.997c-1.105,0-2,.105-2-1s.895-3,2-3,2,1.895,2,3-.895,1-2,1Zm4-4.997c-1.105,0-2-.895-2-2s.895-2,2-2,2,.895,2,2-.895,2-2,2Z"/></svg>

);
