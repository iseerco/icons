import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPaperclipVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-4.96,0-9-4.04-9-9V6.5C3,2.92,5.92,0,9.5,0s6.5,2.92,6.5,6.5V15c0,2.21-1.79,4-4,4s-4-1.79-4-4V6h3V15c0,.55,.45,1,1,1s1-.45,1-1V6.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5V15c0,3.31,2.69,6,6,6s6-2.69,6-6V4h3V15c0,4.96-4.04,9-9,9Z"/></svg>

);
