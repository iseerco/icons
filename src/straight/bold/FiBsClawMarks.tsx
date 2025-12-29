import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsClawMarks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,0s17.5,6,24,24C15.452,16.088,7.467,8.062,0,0Zm24,13.577C20.798,2.205,9.964,0,9.964,0c4.343,4.884,9.03,9.4,14.036,13.577ZM0,9c4.703,5.228,9.716,10.218,15,15C11.115,11.615,0,9,0,9Z"/></svg>

);
