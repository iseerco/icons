import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Mound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.762,24.045H3.238c-1.143,0-2.178-.586-2.769-1.567-.592-.983-.626-2.174-.093-3.189l3.734-7.391c1.513-2.994,4.536-4.853,7.89-4.853s6.377,1.859,7.89,4.853l3.738,7.398c.53,1,.497,2.196-.097,3.182-.591.981-1.626,1.567-2.769,1.567Z"/>
</svg>

);
