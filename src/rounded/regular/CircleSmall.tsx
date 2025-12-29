import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleSmall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,5a7,7,0,1,0,7,7A7,7,0,0,0,12,5Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,17Z"/></svg>

);
