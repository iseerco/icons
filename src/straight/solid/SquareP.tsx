import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareP = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16,9.5c0,1.378-1.121,2.5-2.5,2.5h-5.5v-5h5.5c1.379,0,2.5,1.122,2.5,2.5Zm8-6.5v21H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-6,6.5c0-2.481-2.019-4.5-4.5-4.5h-5.5c-1.103,0-2,.897-2,2v12h2v-5h5.5c2.481,0,4.5-2.019,4.5-4.5Z"/></svg>

);
