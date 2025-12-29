import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsScalpel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.242,1.768c-.979-.982-2.688-.982-3.666,0L0,21.418v1.582h2.61c3.626-.146,7.147-1.757,9.732-4.352l.651-2.921,10.248-10.286c1.009-1.012,1.009-2.66,0-3.674Zm-11.812,16.379c-2.394,2.354-5.534,3.721-8.84,3.854h-1.591v-.168l8.491-8.524,2.497,2.34-.558,2.499Zm11.103-13.41l-10.007,10.045-2.329-2.183L20.285,2.473c.6-.602,1.648-.602,2.248,0,.621.625.622,1.64,0,2.264Z"/></svg>

);
