import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBellConcierge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,18v-3.5c0-6.109-4.589-11.166-10.5-11.906V0h-3v2.594C4.589,3.334,0,8.391,0,14.5v3.5h10.5v2H0v3h24v-3h-10.5v-2h10.5ZM3,14.5c0-4.962,4.038-9,9-9s9,4.038,9,9v.5H3v-.5Z"/></svg>

);
