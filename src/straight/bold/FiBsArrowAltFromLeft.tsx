import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowAltFromLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.555,11.083l-5.555-5.083v4.5H3V3H0V21H3v-7.5h15v4.659l5.555-5.083c.593-.532,.593-1.461,0-1.993Z"/></svg>

);
