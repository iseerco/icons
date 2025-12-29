import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerFastest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.994,4.05C8.352-5.66-6.713,9.5,3.136,21.079A2.318,2.318,0,0,0,7.1,20.615l.613-1.1A1,1,0,0,1,8.587,19H15.41a1,1,0,0,1,.874.515l.629,1.132a2.316,2.316,0,0,0,3.9.486A12.057,12.057,0,0,0,19.994,4.05Zm-.625,12.184a1,1,0,0,1-1.318.514l-4.867-2.136a2,2,0,1,1,.8-1.832l4.867,2.136A1,1,0,0,1,19.369,16.234Z"/></svg>

);
