import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Integral = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.5,24c-1.93,0-3.5-1.57-3.5-3.5v-.5c0-.553.448-1,1-1s1,.447,1,1v.5c0,.827.673,1.5,1.5,1.5s1.5-.673,1.5-1.5V3.5c0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5v.5c0,.553-.448,1-1,1s-1-.447-1-1v-.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5,1.5v17c0,1.93-1.57,3.5-3.5,3.5Z"/>
</svg>

);
