import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flushed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22ZM16,7a3,3,0,1,0,3,3A3,3,0,0,0,16,7Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,16,11Zm-5-1a3,3,0,1,0-3,3A3,3,0,0,0,11,10ZM7,10a1,1,0,1,1,1,1A1,1,0,0,1,7,10Zm1,6h8v2H8Z"/></svg>

);
