import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLandmarkAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,21v3H0v-3H24Zm-1-2H1v-3H3v-5H1v-3H3.354c.95-3.282,3.723-5.798,7.146-6.374V0h3V1.626c3.423,.577,6.196,3.092,7.146,6.374h2.354v3h-2v5h2v3Zm-5-8h-2v5h2v-5Zm-7,0v5h2v-5h-2Zm-4.454-3h10.907c-.95-2.064-3.037-3.5-5.454-3.5s-4.504,1.436-5.454,3.5Zm-.546,8h2v-5h-2v5Z"/></svg>

);
