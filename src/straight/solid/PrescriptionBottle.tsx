import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PrescriptionBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23,5H1v-2C1,1.346,2.346,0,4,0h16c1.654,0,3,1.346,3,3v2ZM3,7v3h4v2H3v2h4v2H3v2h4v2H3v1c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V7H3Z"/></svg>

);
