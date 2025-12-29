import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerSlow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.047,4.076C8.4-5.635-6.66,9.523,3.189,21.105a2.318,2.318,0,0,0,3.964-.465l.613-1.1a1,1,0,0,1,.874-.514h6.823a1,1,0,0,1,.874.514l.629,1.133a2.316,2.316,0,0,0,3.9.486A12.057,12.057,0,0,0,20.047,4.076ZM12,15a2.008,2.008,0,0,1-1.932-2.518L6.293,8.707A1,1,0,0,1,7.707,7.293l3.775,3.775A2,2,0,1,1,12,15Z"/></svg>

);
