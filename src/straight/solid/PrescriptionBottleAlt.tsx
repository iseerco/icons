import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PrescriptionBottleAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3,21c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V7H3v14Zm5-7h3v-3h2v3h3v2h-3v3h-2v-3h-3v-2ZM23,3v2H1v-2C1,1.346,2.346,0,4,0h16c1.654,0,3,1.346,3,3Z"/></svg>

);
