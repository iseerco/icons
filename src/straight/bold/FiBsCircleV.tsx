import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCircleV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12-.5C5.383-.5,0,4.883,0,11.5s5.383,12,12,12,12-5.383,12-12S18.617-.5,12-.5Zm0,21c-4.962,0-9-4.037-9-9S7.038,2.5,12,2.5s9,4.037,9,9-4.038,9-9,9Zm2.805-14h3.195l-3,9.5c-.673,1.531-1.642,2-3,2-1.358,0-2.327-.469-3-2l-3-9.5h3.195l2.36,8.223c.085.173.27.275.445.277.175-.002.36-.104.445-.277l2.36-8.223Z"/></svg>

);
