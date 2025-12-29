import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulerCombined = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.5,14h-.5v3c0,.553-.447,1-1,1s-1-.447-1-1v-3h-2v3c0,.553-.447,1-1,1s-1-.447-1-1v-3h-2v3c0,.553-.448,1-1,1s-1-.447-1-1v-3h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-2h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-2h-3c-.552,0-1-.447-1-1s.448-1,1-1h3v-.5c0-1.933-1.567-3.5-3.5-3.5H3.5C1.567,0,0,1.567,0,3.5v15.5c0,2.761,2.239,5,5,5h15.5c1.933,0,3.5-1.567,3.5-3.5v-3c0-1.933-1.567-3.5-3.5-3.5Z"/></svg>

);
