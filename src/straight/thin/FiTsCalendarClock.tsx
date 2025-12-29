import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCalendarClock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,11c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Zm0,12c-3.032,0-5.5-2.467-5.5-5.5s2.468-5.5,5.5-5.5,5.5,2.467,5.5,5.5-2.468,5.5-5.5,5.5Zm.5-5.707l1.854,1.854-.707,.707-2.146-2.146v-3.207h1v2.793Zm3.5-15.293h-3.5V0h-1V2H7V0h-1V2H2.5C1.122,2,0,3.122,0,4.5V24H12.028c-.362-.305-.696-.64-1.003-1H1V9H23v2.026c.36,.306,.695,.641,1,1.003V4.5c0-1.378-1.121-2.5-2.5-2.5ZM1,8v-3.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5v3.5H1Z"/></svg>

);
