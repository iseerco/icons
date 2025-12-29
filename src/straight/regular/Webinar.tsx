import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Webinar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22,11h2v9H13v2h5v2H6v-2h5v-2H0V4.5c0-1.378,1.122-2.5,2.5-2.5H12v2H2.5c-.276,0-.5,.224-.5,.5v13.5H22v-7Zm-10,5v-1.5c0-1.379-1.122-2.5-2.5-2.5h-3c-1.378,0-2.5,1.121-2.5,2.5v1.5h2v-1.5c0-.275,.224-.5,.5-.5h3c.276,0,.5,.225,.5,.5v1.5h2ZM24,2v7h-5.855s-1.781,1.172-2.588,1.76-1.594-.008-1.555-.662l-.002-8.094C14,.9,14.896,.003,15.999,.002l6.001-.002c1.103,0,2,.897,2,2Zm-2,0l-6,.002,.002,6.087,1.488-1.089h4.51V2Zm-11.5,6.5c0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5,2.5-1.119,2.5-2.5Z"/>
</svg>

);
