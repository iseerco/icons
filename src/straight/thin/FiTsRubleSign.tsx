import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRubleSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M14.5,15c4.136,0,7.5-3.364,7.5-7.5S18.636,0,14.498,0L5,.04V14H2v1h3v3H2v1h3v5h1v-5h10v-1H6v-3H14.5ZM6,1.036l8.5-.036c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5H6V1.036Z"/></svg>

);
