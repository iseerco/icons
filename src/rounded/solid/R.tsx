import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const R = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.379,14.424c2.711-1.131,4.621-3.808,4.621-6.924,0-4.136-3.364-7.5-7.5-7.5H7C4.243,0,2,2.243,2,5V23c0,.553,.448,1,1,1s1-.447,1-1V15H14.5c.298,0,.591-.022,.881-.056l4.745,8.542c.183,.329,.523,.515,.875,.515,.164,0,.331-.04,.484-.126,.483-.269,.657-.877,.389-1.359l-4.495-8.091Zm-13.379-1.424V5c0-1.654,1.346-3,3-3h7.5c3.032,0,5.5,2.468,5.5,5.5s-2.468,5.5-5.5,5.5H4Z"/></svg>

);
