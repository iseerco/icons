import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBr4 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,0c-.828,0-1.5,.671-1.5,1.5V12h-7.5c-1.379,0-2.5-1.122-2.5-2.5V1.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5V9.5c0,3.033,2.468,5.5,5.5,5.5h7.5v7.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V1.5c0-.829-.672-1.5-1.5-1.5Z"/></svg>

);
