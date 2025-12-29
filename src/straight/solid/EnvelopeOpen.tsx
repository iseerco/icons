import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EnvelopeOpen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1.2,8.437,8.48,1.449a5,5,0,0,1,7.055.015l7.27,6.973-8.684,8.685a3.074,3.074,0,0,1-4.242,0Zm14.34,10.1a5,5,0,0,1-7.07,0L.16,10.23A3.962,3.962,0,0,0,0,11.28V24H24V11.28a3.962,3.962,0,0,0-.16-1.05Z"/></svg>

);
