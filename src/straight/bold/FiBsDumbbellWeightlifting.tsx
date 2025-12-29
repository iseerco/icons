import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDumbbellWeightlifting = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,2h-1V0h-3v2H4V0H1v2H0v3h1v2h3v-2h1.64l2.36,7.543v11.457h3v-6h2v6h3v-11.457l2.36-7.543h1.64v2h3v-2h1v-3Zm-9.5,5.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5Z"/>
</svg>

);
