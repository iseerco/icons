import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLetterCase = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,7v.424A4.95,4.95,0,0,0,19,7a5,5,0,0,0,0,10,4.95,4.95,0,0,0,2-.424V17h3V7Zm-2,7a2,2,0,1,1,2-2A2,2,0,0,1,19,14Z"/><path d="M0,17H3.354l1-2h6.292l1,2H15L7.5,2Zm5.854-5L7.5,8.708,9.146,12Z"/></svg>

);
