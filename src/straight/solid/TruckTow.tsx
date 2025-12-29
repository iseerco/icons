import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckTow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.484,12h1.516v7H0v-4c0-1.657,1.343-3,3-3h7.933L4,3.243v3.257c0,1.378-1.122,2.5-2.5,2.5H0v-2h1.5c.276,0,.5-.224.5-.5V0h1.984l9.5,12ZM3.058,21c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.024-.338-.058-.5H3.058Zm14,0c-.034.162-.058.328-.058.5,0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5c0-.172-.024-.338-.058-.5h-4.885Zm-.058-2h7v-5h-7v5Zm2-13h-2v6h7v-1c0-2.757-2.243-5-5-5Z"/></svg>

);
