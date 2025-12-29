import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WineGlassCrack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,9V0h-5.923l-1.6,4h4l-2.548,6.371-1.857-.742,1.452-3.629h-4L10.923,0H5V9c0,3.519,2.613,6.432,6,6.92v6.08H7v2h10v-2h-4v-6.08c3.387-.488,6-3.401,6-6.92Z"/></svg>

);
