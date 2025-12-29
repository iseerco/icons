import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Copyright = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0ZM8.464,15.536a5.008,5.008,0,0,0,7.072,0L16.95,16.95a7,7,0,1,1,0-9.9L15.536,8.464a5,5,0,0,0-7.072,7.072Z"/></svg>

);
