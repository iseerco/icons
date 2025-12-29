import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CircleThreeQuarters = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.98,24c-.44,0-.89-.02-1.34-.07C5.13,23.32,.68,18.87,.08,13.36-.61,7.2,3.5,1.36,9.43,.07c.86-.19,1.75,.03,2.44,.58,.72,.58,1.13,1.44,1.13,2.36v7.99h7.99c.92,0,1.78,.41,2.36,1.13,.56,.69,.77,1.58,.58,2.44-1.2,5.49-6.31,9.43-11.96,9.43Z"/></svg>

);
