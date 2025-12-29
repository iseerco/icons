import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudUpload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.385,7.373a1.128,1.128,0,0,1-.751-.748h0a8,8,0,1,0-15.1,5.237A1.046,1.046,0,0,1,2.223,13.1,5.5,5.5,0,0,0,.057,18.3,5.622,5.622,0,0,0,5.683,23H14V15.414l-1.293,1.293a1,1,0,0,1-1.414-1.414l1.586-1.586a3,3,0,0,1,4.242,0l1.586,1.586a1,1,0,1,1-1.414,1.414L16,15.414v7.573a8.181,8.181,0,0,0,7.971-7.309A7.964,7.964,0,0,0,18.385,7.373Z"/></svg>

);
