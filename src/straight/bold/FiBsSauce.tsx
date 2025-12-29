import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSauce = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,8.05V5H13.833L13,0H11l-.833,5H7V8.05A3.5,3.5,0,0,0,4,11.5V24H20V11.5A3.5,3.5,0,0,0,17,8.05ZM17,21H7V11.5a.5.5,0,0,1,.5-.5h9a.5.5,0,0,1,.5.5ZM8.974,14h6v4h-6Z"/></svg>

);
