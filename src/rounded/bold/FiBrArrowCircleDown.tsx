import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,21a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21Z"/><path d="M15.449,12.815,13.5,14.731V6.5a1.5,1.5,0,0,0-3,0v8.231L8.551,12.815a1.5,1.5,0,1,0-2.1,2.14L9.55,18a3.524,3.524,0,0,0,4.9,0l3.1-3.048a1.5,1.5,0,1,0-2.1-2.14Z"/></g></svg>

);
