import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Clock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm1,11.879a1,1,0,0,1-.469.848l-3.84,2.4a1,1,0,1,1-1.062-1.7L11,11.325V7a1,1,0,0,1,2,0Z"/></svg>

);
