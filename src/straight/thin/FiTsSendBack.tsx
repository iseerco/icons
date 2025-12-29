import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSendBack = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,13h-3.5v-4.3c0-1.489-1.211-2.7-2.7-2.7h-4.3v-3.5c0-1.379-1.122-2.5-2.5-2.5H2.5C1.122,0,0,1.121,0,2.5v8.5h6v7h7v6h11v-8.5c0-1.379-1.122-2.5-2.5-2.5ZM1,2.5c0-.827.673-1.5,1.5-1.5h6c.827,0,1.5.673,1.5,1.5v7.5H1V2.5Zm12,13v1.5h-6v-6h4v-4h4.3c.938,0,1.7.763,1.7,1.7v4.3h-1.5c-1.378,0-2.5,1.121-2.5,2.5Zm10,7.5h-9v-7.5c0-.827.673-1.5,1.5-1.5h6c.827,0,1.5.673,1.5,1.5v7.5Z"/></svg>

);
