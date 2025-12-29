import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rhombus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.466,8.465l-6.93-6.931a5.008,5.008,0,0,0-7.072,0L1.534,8.465a5,5,0,0,0,0,7.07l6.93,6.931a5.007,5.007,0,0,0,7.072,0l6.93-6.931a5,5,0,0,0,0-7.07Z"/></svg>

);
