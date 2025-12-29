import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Surprise = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.894,24,0A12.013,12.013,0,0,0,12,0ZM7,9.5a1.5,1.5,0,0,1,3,0A1.5,1.5,0,0,1,7,9.5ZM12,20a3,3,0,0,1,0-6A3,3,0,0,1,12,20Zm3.5-9a1.5,1.5,0,0,1,0-3A1.5,1.5,0,0,1,15.5,11Z"/></svg>

);
