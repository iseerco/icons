import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSortAlphaUpAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,0H15V3h4.131l-4.131,4.957v3.043h8v-3h-4.131l4.131-4.957V0Zm0,17v7h-3v-2h-2v2h-3v-7c0-2.206,1.794-4,4-4s4,1.794,4,4Zm-2.667-.167c0-.736-.598-1.333-1.333-1.333s-1.333,.598-1.333,1.333v2.667h2.667v-2.667ZM10.896,7.604l-2.896-2.896V24h-3V4.707l-2.896,2.896L-.018,5.482,4.732,.732C5.22,.245,5.859,0,6.5,0s1.28,.244,1.768,.731l4.75,4.75-2.121,2.121Z"/></svg>

);
