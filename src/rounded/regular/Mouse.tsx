import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mouse = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,3V1a1,1,0,0,0-2,0V3a7.008,7.008,0,0,0-7,7v6a8,8,0,0,0,16,0V10A7.008,7.008,0,0,0,13,3Zm5,13A6,6,0,0,1,6,16V10a5.006,5.006,0,0,1,5-5h2a5.006,5.006,0,0,1,5,5Z"/><path d="M12,7a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V8A1,1,0,0,0,12,7Z"/></svg>

);
