import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ReflectHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,2.75V21.25l8.24-7.54c.49-.43,.76-1.06,.76-1.71s-.28-1.28-.76-1.7L0,2.75Zm15.75,7.54c-.49,.44-.76,1.06-.76,1.71s.28,1.27,.76,1.7l8.24,7.54V2.75l-8.24,7.54ZM11,0h2V24h-2V0Z"/></svg>

);
