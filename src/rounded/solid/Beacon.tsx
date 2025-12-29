import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Beacon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,24h-6.66C5.87,24,.46,19.1,.03,12.85-.21,9.38,1.06,5.97,3.51,3.52,5.97,1.06,9.38-.21,12.85,.03c6.25,.43,11.15,5.84,11.15,12.31v5.82c0,3.44-2.06,5.85-5,5.85Z"/></svg>

);
