import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SignalBarsFair = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11,11.5v12.5h-4v-12.5c0-.827.673-1.5,1.5-1.5h1c.827,0,1.5.673,1.5,1.5Zm-7.5,5.5h-1c-.827,0-1.5.673-1.5,1.5v5.5h4v-5.5c0-.827-.673-1.5-1.5-1.5Z"/></svg>

);
