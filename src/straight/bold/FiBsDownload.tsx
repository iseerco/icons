import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDownload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.033,19.011a3.489,3.489,0,0,0,2.475-1.024l3.919-3.919-2.121-2.121-2.782,2.782L13.5,0l-3,0,.024,14.709L7.76,11.947,5.639,14.068l3.919,3.919A3.487,3.487,0,0,0,12.033,19.011Z"/><path d="M21,16v5H3V16H0v5a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V16Z"/></svg>

);
