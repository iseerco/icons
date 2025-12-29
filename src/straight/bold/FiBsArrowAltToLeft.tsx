import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowAltToLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13.5H9v4.5L3.445,12.983c-.297-.262-.445-.623-.445-.983s.148-.721,.445-.983l5.555-5.017v4.5h15v3ZM0,3V21H3V3H0Z"/></svg>

);
