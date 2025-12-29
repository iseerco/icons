import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCalendarExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,5.5V24h-8v-3h5V9H3v12h5v3H0V5.5c0-1.93,1.57-3.5,3.5-3.5h2.5V0h3V2h6V0h3V2h2.5c1.93,0,3.5,1.57,3.5,3.5Zm-13.5,13.5h3V11h-3v8Zm0,5h3v-3h-3v3Z"/></svg>

);
