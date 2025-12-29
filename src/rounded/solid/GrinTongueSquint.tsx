import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinTongueSquint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,16h2v.6c-.062,1.839-1.938,1.837-2,0Zm13-4A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12ZM7,12a1,1,0,0,0,.554-.168l3-2a1.007,1.007,0,0,0,0-1.664l-3-2a1,1,0,1,0-1.11,1.664L8.2,9,6.445,10.168A1,1,0,0,0,7,12Zm10,3a1,1,0,0,0-1-1H8a1,1,0,0,0,0,2H9v.6c.133,4.495,5.869,4.49,6,0V16h1A1,1,0,0,0,17,15ZM15.8,9l1.752-1.168a1,1,0,0,0-1.11-1.664l-3,2a1.007,1.007,0,0,0,0,1.664l3,2a1,1,0,1,0,1.11-1.664Z"/></svg>

);
