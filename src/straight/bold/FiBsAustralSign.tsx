import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAustralSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,13v-3h-5.63L15.13,1.94c-.6-1.19-1.8-1.94-3.13-1.94s-2.54,.75-3.17,2.03l-3.2,7.97H0v3H4.42l-.8,2H0v3H2.41L0,24H3.25l2.4-6h12.7l2.41,6h3.24l-2.41-6h2.41v-3h-3.62l-.8-2h4.42ZM11.56,3.28c.09-.18,.25-.28,.45-.28s.36,.11,.4,.17l2.74,6.83h-6.28l2.7-6.72Zm5.6,11.72H6.86l.8-2h8.69l.8,2Z"/></svg>

);
