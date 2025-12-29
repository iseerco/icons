import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAgeRestrictionThree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.038-9-9S7.037,3,12,3s9,4.038,9,9-4.037,9-9,9Zm7-10v2h-2v2h-2v-2h-2v-2h2v-2h2v2h2Zm-7,3c0,1.654-1.346,3-3,3h-3v-2h3c.552,0,1-.449,1-1s-.448-1-1-1h-2v-2h1.5c.552,0,1-.449,1-1s-.448-1-1-1h-2.5v-2h2.5c1.654,0,3,1.346,3,3,0,.646-.21,1.242-.559,1.732.642.551,1.059,1.358,1.059,2.268Z"/>
</svg>

);
