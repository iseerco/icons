import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowCircleDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Zm5.707-8.879a1,1,0,0,0-1.414,0L13,16.413,12.993,6a1,1,0,0,0-2,0L11,16.414,7.707,13.121A1,1,0,1,0,6.269,14.51l.024.025,3.585,3.586a3,3,0,0,0,4.243,0h0l3.586-3.586A1,1,0,0,0,17.707,13.121Z"/></svg>

);
