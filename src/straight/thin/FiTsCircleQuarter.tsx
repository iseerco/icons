import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCircleQuarter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,13H0v-.5C0,5.61,5.61,0,12.5,0h.5V13ZM1.01,12H12V1.01C6.06,1.27,1.27,6.06,1.01,12Z"/></svg>

);
