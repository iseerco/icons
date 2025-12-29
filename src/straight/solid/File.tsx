import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const File = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="17 0.586 17 5 21.414 5 17 0.586"/><path d="M15,7V0H5A3,3,0,0,0,2,3V24H22V7Z"/></svg>

);
