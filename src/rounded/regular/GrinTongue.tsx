import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinTongue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,22A10.011,10.011,0,0,1,2,12C2.5-1.248,21.5-1.244,22,12A10.011,10.011,0,0,1,12,22Zm5-8H7a1,1,0,0,0,0,2H9v.6c.133,4.495,5.869,4.49,6,0V16h2A1,1,0,0,0,17,14Zm-4,2.6c-.062,1.839-1.938,1.837-2,0V16h2ZM7,9.5a1.5,1.5,0,0,1,3,0A1.5,1.5,0,0,1,7,9.5Zm7,0a1.5,1.5,0,0,1,3,0A1.5,1.5,0,0,1,14,9.5Z"/></svg>

);
