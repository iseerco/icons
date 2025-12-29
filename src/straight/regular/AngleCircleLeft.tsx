import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleCircleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,12A12,12,0,1,1,12,24,12.013,12.013,0,0,1,0,12Zm22,0A10,10,0,1,0,12,22,10.011,10.011,0,0,0,22,12ZM8.586,13.414,13.3,18.126l1.414-1.414L10,12l4.673-4.673L13.259,5.913,8.586,10.586a2,2,0,0,0,0,2.828Z"/></svg>

);
