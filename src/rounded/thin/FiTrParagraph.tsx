import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrParagraph = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.5,0h-15C3.813,0,0,3.813,0,8.5s3.813,8.5,8.5,8.5h6.5v6.5c0,.276.224.5.5.5s.5-.224.5-.5V1h4v22.5c0,.276.224.5.5.5s.5-.224.5-.5V1h2.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-8.5,16h-6.5c-4.136,0-7.5-3.364-7.5-7.5S4.364,1,8.5,1h6.5v15Z"/></svg>

);
