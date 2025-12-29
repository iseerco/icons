import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CalendarPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,8H0v-3c0-1.654,1.346-3,3-3h3V0h2V2h8V0h2V2h3c1.654,0,3,1.346,3,3v3Zm-.743,4.742c-.99-.99-2.6-.99-3.59,0l-7.668,7.667v3.59h3.59l7.667-7.667c.479-.48,.744-1.117,.744-1.795s-.264-1.316-.744-1.795Zm-1.795-2.742H0v14H10v-4.419l8.254-8.252c.855-.856,1.995-1.329,3.209-1.329Z"/></svg>

);
