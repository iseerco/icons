import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCarBattery = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4,11h6v3H4ZM18,9H15v2H13v3h2v2h3V14h2V11H18Zm6-.5V22H0V8.5A3.5,3.5,0,0,1,3.5,5H4V2h6V5h4V2h6V5h.5A3.5,3.5,0,0,1,24,8.5Zm-3,0a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5V19H21Z"/></svg>

);
