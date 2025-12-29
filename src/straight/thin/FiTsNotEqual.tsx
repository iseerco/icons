import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsNotEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14.367,8l-3.636,8h13.269v1h-13.724l-3.162,6.957-.91-.414,2.974-6.543H0v-1h9.633l3.636-8H0v-1h13.724L16.886.043l.91.414-2.974,6.543h9.178v1h-9.633Z"/>
</svg>

);
