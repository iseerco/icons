import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsClawMarks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,0s14,10.5,24,24C15,15.5,7.5,8.5,0,0Zm23.964,14.885C18,5,9.08,0,9.08,0c5.42,6,8.42,8.5,14.885,14.885ZM0,9c6,7,9,10,15,15C8.5,15,0,9,0,9Z"/></svg>

);
