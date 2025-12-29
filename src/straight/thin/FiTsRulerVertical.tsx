import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRulerVertical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.5,0c-1.379,0-2.5,1.121-2.5,2.5V21.5c0,1.379,1.121,2.5,2.5,2.5h7.5V0h-7.5Zm0,23c-.827,0-1.5-.673-1.5-1.5V2.5c0-.827,.673-1.5,1.5-1.5h6.5v3h-4v1h4v4h-4v1h4v4h-4v1h4v4h-4v1h4v3h-6.5Z"/></svg>

);
