import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,25H-1V11.043c0-.929,.42-1.79,1.151-2.363L9.151,1.638c1.088-.854,2.609-.854,3.697,0l9,7.043c.731,.572,1.151,1.434,1.151,2.362v13.957Z"/></svg>

);
