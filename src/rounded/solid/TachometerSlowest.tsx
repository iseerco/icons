import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TachometerSlowest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,13a11.942,11.942,0,0,0,3.186,8.133,2.316,2.316,0,0,0,3.9-.487l.629-1.132A1,1,0,0,1,8.588,19h6.824a1,1,0,0,1,.874.514l.612,1.1a2.318,2.318,0,0,0,3.964.465C30.716,9.486,15.633-5.655,4,4.052A12.016,12.016,0,0,0,0,13Zm5.143,1.918,4.868-2.137a2,2,0,1,1,.8,1.833L5.948,16.75a1,1,0,1,1-.805-1.832Z"/></svg>

);
