import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,0c-.276,0-.5,.224-.5,.5V11H3V.5c.01-.649-1.01-.649-1,0V23.5c-.01,.649,1.01,.649,1,0V12H21v11.5c-.01,.649,1.01,.649,1,0V.5c0-.276-.224-.5-.5-.5Z"/></svg>

);
