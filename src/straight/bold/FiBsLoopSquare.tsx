import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLoopSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M6.364,18.531c-.477,.477-1.251,.477-1.728,0L0,14H4V4.5C4,2.019,6.019,0,8.5,0h9.5V3H8.5c-.827,0-1.5,.673-1.5,1.5V14h4l-4.636,4.531ZM24,10l-4.636-4.531c-.477-.477-1.251-.477-1.728,0l-4.636,4.531h4v9.5c0,.827-.673,1.5-1.5,1.5H6v3H15.5c2.481,0,4.5-2.019,4.5-4.5V10h4Z"/>
</svg>

);
