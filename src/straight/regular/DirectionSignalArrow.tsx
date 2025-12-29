import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DirectionSignalArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.414,13.414l-3.75,3.75-1.414-1.414,2.75-2.75h-5c-1.654,0-3,1.346-3,3v8h-2v-4c0-1.654-1.346-3-3-3H3l2.75,2.75-1.414,1.414-3.75-3.75c-.78-.78-.78-2.048,0-2.828l3.75-3.75,1.414,1.414-2.75,2.75h5c1.125,0,2.164.373,3,1.003V3l-2.75,2.75-1.414-1.414,3.75-3.75c.779-.78,2.049-.78,2.828,0l3.75,3.75-1.414,1.414-2.75-2.75v9.003c.836-.629,1.875-1.003,3-1.003h5l-2.75-2.75,1.414-1.414,3.75,3.75c.78.78.78,2.048,0,2.828Z"/>
</svg>

);
