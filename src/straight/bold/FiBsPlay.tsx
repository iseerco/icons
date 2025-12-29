import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlay = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5,23.76V.279L19.029,9.235a3.275,3.275,0,0,1-.008,5.539ZM8,5.754V18.273l9.412-6.032a.264.264,0,0,0,.14-.239.257.257,0,0,0-.129-.232Z"/></svg>

);
