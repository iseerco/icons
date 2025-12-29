import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAngry = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,21a9.011,9.011,0,0,1-9-9C3.453.077,20.549.08,21,12A9.011,9.011,0,0,1,12,21Zm0-8a10,10,0,0,1,6,2.381l-2,2.242a5.861,5.861,0,0,0-8.01,0L6,15.381A10,10,0,0,1,12,13Zm1-2.5A3.638,3.638,0,0,1,17,7v3c-.928,0-1,.383-1,.5A1.5,1.5,0,0,1,13,10.5ZM7,10V7a3.638,3.638,0,0,1,4,3.5,1.5,1.5,0,0,1-3,0C7.99,10.4,7.959,10,7,10Z"/></svg>

);
