import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ReflectHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.25,10.3L0,2.75V21.25l8.24-7.54c.49-.43,.76-1.06,.76-1.71s-.28-1.28-.76-1.7Zm-1.35,1.93l-4.89,4.48V7.29l4.9,4.49c.09,.08,.1,.17,.1,.22s-.01,.14-.11,.23Zm8.86-1.94c-.49,.44-.76,1.06-.76,1.71s.28,1.27,.76,1.7l8.24,7.54V2.75l-8.24,7.54ZM11,0h2V24h-2V0Z"/></svg>

);
