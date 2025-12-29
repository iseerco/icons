import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InputNumeric = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.921,7l.079,1v9h-2v-6.621l-1.284,1.318-1.433-1.395,3.215-3.303h1.422Zm16.079-1v15H0V6c0-1.654,1.346-3,3-3h18c1.654,0,3,1.346,3,3Zm-2,0c0-.552-.449-1-1-1H3c-.551,0-1,.448-1,1v13h20V6Z"/></svg>

);
