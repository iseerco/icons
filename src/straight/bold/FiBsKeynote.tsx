import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKeynote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24.02,18.019v-3h-1.174l-2.315-6.019H5.98v-2.5c0-1.378,1.121-2.5,2.5-2.5h.75c.456,.607,1.182,1,2,1h4.25c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5h-4.25c-.818,0-1.544,.393-2,1h-.75C5.448,1,2.98,3.467,2.98,6.5v3.772l-1.826,4.747H.02v3H10.5v2.981h-3.5v3h10v-3h-3.5v-2.981h10.52ZM5.53,12h12.939l1.161,3.019H4.369l1.161-3.019Z"/></svg>

);
