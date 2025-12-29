import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKeyboardBrightness = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,18H7v-3h10v3Zm-3.5-14h-3v6h3V4ZM4,15H0v3H4v-3Zm20,0h-4v3h4v-3Zm-1.94-6.44l-2.12-2.12-4.05,4.05,2.12,2.12,4.05-4.05Zm-13.95,1.93L4.06,6.44l-2.12,2.12,4.05,4.05,2.12-2.12Z"/></svg>

);
