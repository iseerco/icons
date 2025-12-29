import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BriefcaseBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,4h-1.1c-.46-2.28-2.48-4-4.9-4h-2c-2.41,0-4.43,1.72-4.9,4h-1.1C2.24,4,0,6.24,0,9v10c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V9c0-2.76-2.24-5-5-5ZM11,2h2c1.3,0,2.42,.84,2.83,2h-7.66c.41-1.16,1.52-2,2.83-2Zm11,17c0,1.65-1.35,3-3,3H5c-1.65,0-3-1.35-3-3V9c0-1.65,1.35-3,3-3h14c1.65,0,3,1.35,3,3v10Z"/></svg>

);
