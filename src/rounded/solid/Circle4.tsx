import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm4,17c0,.553-.447,1-1,1s-1-.447-1-1v-3h-3c-1.654,0-3-1.346-3-3V7c0-.553,.447-1,1-1s1,.447,1,1v4c0,.552,.448,1,1,1h3V7c0-.553,.447-1,1-1s1,.447,1,1v10Z"/></svg>

);
