import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPassword = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,16h6v1h-6v-1Zm.719-3.012l2.281-2.281,2.281,2.281.707-.707-2.281-2.281,2.281-2.281-.707-.707-2.281,2.281-2.281-2.281-.707.707,2.281,2.281-2.281,2.281.707.707Zm7.281,4.012h6v-1h-6v1Zm6.007-9.301l-.707-.707-2.3,2.301-2.3-2.301-.707.707,2.3,2.301-2.3,2.301.707.707,2.3-2.301,2.3,2.301.707-.707-2.3-2.301,2.3-2.301ZM1,17h6v-1H1v1ZM6.3,6.992l-2.3,2.301-2.3-2.301-.707.707,2.3,2.301-2.3,2.301.707.707,2.3-2.301,2.3,2.301.707-.707-2.3-2.301,2.3-2.301-.707-.707Z"/>
</svg>

);
