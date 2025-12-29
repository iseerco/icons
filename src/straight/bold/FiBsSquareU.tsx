import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSquareU = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h24V3.5c0-1.93-1.57-3.5-3.5-3.5Zm.5,21H3V3.5c0-.275.224-.5.5-.5h17c.276,0,.5.225.5.5v17.5ZM15,5h3v8c0,3.309-2.691,6-6,6s-6-2.691-6-6V5h3v8c0,1.654,1.346,3,3,3s3-1.346,3-3V5Z"/></svg>

);
