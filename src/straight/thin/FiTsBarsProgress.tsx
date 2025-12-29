import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBarsProgress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.5,3H2.5c-1.379,0-2.5,1.121-2.5,2.5v3c0,1.379,1.121,2.5,2.5,2.5H21.5c1.379,0,2.5-1.121,2.5-2.5v-3c0-1.379-1.121-2.5-2.5-2.5ZM1,8.5v-3c0-.827,.673-1.5,1.5-1.5H14v6H2.5c-.827,0-1.5-.673-1.5-1.5Zm22,0c0,.827-.673,1.5-1.5,1.5h-6.5V4h6.5c.827,0,1.5,.673,1.5,1.5v3Zm-1.5,4.5H2.5c-1.379,0-2.5,1.121-2.5,2.5v3c0,1.379,1.121,2.5,2.5,2.5H21.5c1.379,0,2.5-1.121,2.5-2.5v-3c0-1.379-1.121-2.5-2.5-2.5ZM1,18.5v-3c0-.827,.673-1.5,1.5-1.5h5.5v6H2.5c-.827,0-1.5-.673-1.5-1.5Zm22,0c0,.827-.673,1.5-1.5,1.5H9v-6h12.5c.827,0,1.5,.673,1.5,1.5v3Z"/></svg>

);
