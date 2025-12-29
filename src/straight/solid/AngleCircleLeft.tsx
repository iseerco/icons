import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleCircleLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM8.586,13.414a2,2,0,0,1,0-2.828l4.673-4.673,1.414,1.414L10,12l4.711,4.712L13.3,18.126Z"/></svg>

);
