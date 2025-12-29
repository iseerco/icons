import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Paragraph = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,0h-15.5C3.813,0,0,3.813,0,8.5s3.813,8.5,8.5,8.5h5.5v7h2V2h3v22h2V2h3V0Z"/></svg>

);
