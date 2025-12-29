import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSignHanging = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3V0H3.5C1.57,0,0,1.57,0,3.5V24H3V3.5c0-.276,.224-.5,.5-.5h4.5v2.036c-1.694,.243-3,1.704-3,3.464v12.5H24V8.5c0-1.76-1.306-3.221-3-3.464V3h3Zm-3,15H8V8.5c0-.276,.224-.5,.5-.5h12c.276,0,.5,.224,.5,.5v9.5Zm-3-13h-7V3h7v2Z"/></svg>

);
