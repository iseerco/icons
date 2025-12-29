import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMugHot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,11.5c0-1.378-1.121-2.5-2.5-2.5h-2.5v-3H1v15.5c0,1.378,1.121,2.5,2.5,2.5H15.5c1.379,0,2.5-1.122,2.5-2.5v-2.5h5v-7.5Zm-6,10c0,.827-.673,1.5-1.5,1.5H3.5c-.827,0-1.5-.673-1.5-1.5V7h15v14.5Zm5-3.5h-4V10h2.5c.827,0,1.5,.673,1.5,1.5v6.5ZM10,4h-1V0h1V4Zm4,0h-1V0h1V4Zm-8,0h-1V0h1V4Z"/></svg>

);
