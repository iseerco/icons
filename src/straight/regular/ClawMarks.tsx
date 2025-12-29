import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClawMarks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,0s14.727,8.727,24,24C15.452,16.088,7.467,8.062,0,0Zm23.964,14C18.5,3.5,9.964,0,9.964,0c4.332,5.036,9.007,9.693,14,14ZM0,9c4.703,5.227,9.716,10.218,15,15C9.5,13,0,9,0,9Z"/></svg>

);
