import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockFive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm2.5,16.33c-.157,.091-.329,.134-.499,.134-.346,0-.682-.179-.867-.5l-2-3.464c-.088-.152-.134-.324-.134-.5V6c0-.552,.447-1,1-1s1,.448,1,1v5.732l1.866,3.232c.276,.478,.112,1.09-.366,1.366Z"/></svg>

);
