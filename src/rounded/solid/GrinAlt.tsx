import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm3.5,7c1.964.027,1.964,4.973,0,5C13.536,11.973,13.536,7.027,15.5,7Zm-7,0c1.964.027,1.964,4.973,0,5C6.536,11.973,6.536,7.027,8.5,7Zm9.342,8.542A6.827,6.827,0,0,1,12,19a6.836,6.836,0,0,1-5.848-3.458A1,1,0,0,1,7.2,14.024,15.4,15.4,0,0,0,12,15a15.4,15.4,0,0,0,4.792-.976A1,1,0,0,1,17.842,15.542Z"/></svg>

);
