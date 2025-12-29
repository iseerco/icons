import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Laugh = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM6,11V10a2,2,0,0,1,4,0v1Zm6.007,8C9.028,19,7,16,7,14H17A5.307,5.307,0,0,1,12.007,19ZM14,11V10a2,2,0,0,1,4,0v1Z"/></svg>

);
