import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleE = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9,6h7.5v2h-7.5c-.275,0-.5.224-.5.5v2.5h6v2h-6v2.5c0,.276.225.5.5.5h7.5v2h-7.5c-1.379,0-2.5-1.122-2.5-2.5v-7c0-1.378,1.121-2.5,2.5-2.5Zm15,6c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-2,0c0-5.514-4.486-10-10-10S2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Z"/></svg>

);
