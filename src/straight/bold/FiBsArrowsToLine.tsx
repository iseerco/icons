import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowsToLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10.5v3H0v-3H24Zm-11.293,5.793c-.391-.391-1.024-.391-1.414,0l-3.793,3.707h3v4h3v-4h3l-3.793-3.707Zm-1.414-8.586c.391,.391,1.024,.391,1.414,0l3.793-3.707h-3V0h-3V4h-3l3.793,3.707Z"/></svg>

);
