import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPeopleDress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,2.5c0-1.38,1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5-1.12,2.5-2.5,2.5-2.5-1.12-2.5-2.5Zm6,18.5v3h-3v-3h-1v3h-3v-3h-4v3h-3v-3h-1v3H3v-3H.8l1.49-11.93c.22-1.75,1.71-3.07,3.47-3.07h1.47c1.76,0,3.25,1.32,3.47,3.07l1.29,10.34,1.29-10.34c.22-1.75,1.71-3.07,3.47-3.07h1.47c1.76,0,3.25,1.32,3.47,3.07l1.49,11.93h-2.2Zm-16.8-3h4.6l-1.07-8.56c-.03-.25-.24-.44-.5-.44h-1.47c-.25,0-.46,.19-.5,.44l-1.07,8.56Zm11,0h4.6l-1.07-8.56c-.03-.25-.24-.44-.5-.44h-1.47c-.25,0-.46,.19-.5,.44l-1.07,8.56ZM6.5,5c1.38,0,2.5-1.12,2.5-2.5S7.88,0,6.5,0s-2.5,1.12-2.5,2.5,1.12,2.5,2.5,2.5Z"/></svg>

);
