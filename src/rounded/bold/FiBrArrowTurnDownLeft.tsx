import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowTurnDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3.5v7c0,3.03-2.47,5.5-5.5,5.5H4.25l3.33,3.46c.57,.6,.56,1.55-.04,2.12-.29,.28-.67,.42-1.04,.42-.39,0-.79-.15-1.08-.46L1.01,16.95c-1.34-1.34-1.34-3.56,.02-4.93L5.42,7.46c.57-.6,1.52-.61,2.12-.04,.6,.58,.62,1.52,.04,2.12l-3.33,3.46h14.25c1.38,0,2.5-1.12,2.5-2.5V3.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5Z"/></svg>

);
