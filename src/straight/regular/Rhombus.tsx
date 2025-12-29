import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Rhombus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,2.828,21.172,12,12,21.172,2.828,12,12,2.828M12,0,0,12,12,24,24,12,12,0Z"/></svg>

);
