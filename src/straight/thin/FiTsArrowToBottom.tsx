import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowToBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19,23h-6.293l6.146-6.146-.707-.707-5.646,5.646V0h-1V21.793l-5.646-5.646-.707,.707,6.146,6.146H5v1h14v-1Z"/></svg>

);
