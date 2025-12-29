import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tie = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,4l-1-4h6l-1,4h-4Zm0,2l-3.5,13,5.5,5,5.5-5-3.5-13h-4Z"/>
</svg>

);
