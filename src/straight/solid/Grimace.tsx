import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Grimace = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm3.5,8a1.5,1.5,0,0,1,0,3A1.5,1.5,0,0,1,15.5,8Zm-7,0a1.5,1.5,0,0,1,0,3A1.5,1.5,0,0,1,8.5,8ZM6,16a2,2,0,0,1,2-2H9v4H8A2,2,0,0,1,6,16Zm5,2V14h2v4Zm5,0H15V14h1A2,2,0,0,1,16,18Z"/></svg>

);
