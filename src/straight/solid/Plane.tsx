import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Plane = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.962,8,7.643,0H10.4a3,3,0,0,1,2.634,1.564L16.269,8ZM21,10H4.987L2.4,7.411A1.4,1.4,0,0,0,.187,9.1L3.407,15h7.148L7.019,24h3.063a2.97,2.97,0,0,0,2.6-1.513L17.269,15H24V13A3,3,0,0,0,21,10Z"/></svg>

);
