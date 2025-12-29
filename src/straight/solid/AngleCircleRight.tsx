import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleCircleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm15.414-1.414a2,2,0,0,1,0,2.828l-4.673,4.673L9.327,16.673,14,12,9.289,7.288,10.7,5.874Z"/></svg>

);
