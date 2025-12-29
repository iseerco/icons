import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRv = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,6.5v-1A4.505,4.505,0,0,0,19.5,1L5.5.985A5.506,5.506,0,0,0,0,6.485v6.53a7.45,7.45,0,0,0,2.2,5.3l.8.8V20.5a2.5,2.5,0,0,0,5,0V20l8,.006V20.5a2.5,2.5,0,0,0,5,0v-.487l1.5,0a1.5,1.5,0,0,0,1.5-1.5V14.593a7.509,7.509,0,0,0-.988-3.72L21.921,8.964A2.5,2.5,0,0,0,24,6.5Zm-11,4v6.507L5.122,17l-.8-.8A4.47,4.47,0,0,1,3,13.015V6.485a2.5,2.5,0,0,1,2.5-2.5L19.5,4A1.5,1.5,0,0,1,21,5.5V6H17.5A4.505,4.505,0,0,0,13,10.5ZM16,14V10.5A1.5,1.5,0,0,1,17.5,9h.986l1.921,3.361A4.5,4.5,0,0,1,20.96,14ZM11,8v2a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V8A1,1,0,0,1,6,7h4A1,1,0,0,1,11,8Z"/></svg>

);
