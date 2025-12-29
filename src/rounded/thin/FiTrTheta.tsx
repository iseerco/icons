import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTheta = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C7.038,0,3,5.383,3,12s4.038,12,9,12,9-5.383,9-12S16.962,0,12,0Zm0,1c4.289,0,7.801,4.666,7.991,10.5H4.009c.191-5.834,3.702-10.5,7.991-10.5Zm0,22c-4.289,0-7.801-4.666-7.991-10.5h15.983c-.191,5.834-3.702,10.5-7.991,10.5Z"/></svg>

);
