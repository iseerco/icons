import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Paragraph = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23,0h-14.5C3.813,0,0,3.813,0,8.5s3.813,8.5,8.5,8.5h5.5v6c0,.553.448,1,1,1s1-.447,1-1V2h3v21c0,.553.448,1,1,1s1-.447,1-1V2h2c.552,0,1-.447,1-1s-.448-1-1-1Z"/></svg>

);
