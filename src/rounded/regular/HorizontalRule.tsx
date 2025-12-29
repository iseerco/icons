import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HorizontalRule = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,13H1c-.55,0-1-.45-1-1s.45-1,1-1H23c.55,0,1,.45,1,1s-.45,1-1,1Z"/></svg>

);
