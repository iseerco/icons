import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltToLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13H8v5L2.445,12.983c-.297-.262-.445-.623-.445-.983s.148-.721,.445-.983l5.555-5.017v5H24v2ZM0,3V21H2V3H0Z"/></svg>

);
