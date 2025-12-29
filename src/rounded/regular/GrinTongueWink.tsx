import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GrinTongueWink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16,14H8a1,1,0,0,0,0,2H9v.6c.133,4.495,5.87,4.49,6,0V16h1A1,1,0,0,0,16,14Zm-3,2.6c-.062,1.839-1.939,1.837-2,0V16h2ZM12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,22A10.011,10.011,0,0,1,2,12C2.5-1.248,21.5-1.245,22,12A10.011,10.011,0,0,1,12,22Zm6-12c0,1-.895,1-2,1s-2,0-2-1a2,2,0,0,1,4,0ZM7,11A1,1,0,0,1,7,9h3a1,1,0,0,1,0,2Z"/></svg>

);
