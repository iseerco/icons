import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const KeyboardBrightness = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17,18H7v-2h10v2ZM13,4h-2v6h2V4ZM4,16H0v2H4v-2Zm20,0h-4v2h4v-2Zm-2.29-7.29l-1.41-1.41-4.05,4.05,1.41,1.41,4.05-4.05Zm-13.95,2.64L3.71,7.29l-1.41,1.41,4.05,4.05,1.41-1.41Z"/></svg>

);
