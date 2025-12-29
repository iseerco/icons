import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowDownFromDottedLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.11,15.65l2.12,2.12-5.5,5.5c-.47,.47-1.1,.73-1.77,.73s-1.3-.26-1.77-.73l-5.5-5.5,2.12-2.12,3.65,3.65V5h3v14.29l3.65-3.65ZM6.96,3c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Zm5,0c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5Zm5,0c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5-1.5,.67-1.5,1.5,.67,1.5,1.5,1.5ZM1.96,0C1.13,0,.46,.67,.46,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5S2.79,0,1.96,0ZM21.96,0c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Z"/></svg>

);
