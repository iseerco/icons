import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LessonClass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm4,12.5H2v-6c0-.551.448-1,1-1h12v-2H3c-1.654,0-3,1.346-3,3v8h2v7h2v-7h2v7h2v-14h-2v5ZM21,0h-12.76c.391.584.64,1.267.722,2h12.038c.552,0,1,.449,1,1v10h-3v-2h-4v2h-5v2h14V3c0-1.654-1.346-3-3-3Z"/>
</svg>

);
