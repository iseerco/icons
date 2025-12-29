import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WindowRestore = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,11H0c0-2.76,2.24-5,5-5H13c2.76,0,5,2.24,5,5ZM0,13v6c0,2.76,2.24,5,5,5H13c2.76,0,5-2.24,5-5v-6H0ZM19,0H11c-1.8,0-3.38,.96-4.26,2.39-.43,.7,.08,1.61,.91,1.61h5.35c3.87,0,7,3.13,7,7v6.9c2.28-.46,4-2.48,4-4.9V5c0-2.76-2.24-5-5-5Z"/></svg>

);
