import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCarBump = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,24H14a5,5,0,0,1,10,0ZM8.745,18.389l.731,1.861L4.822,22.078l-.731-1.862-1.862.732L.865,17.473a12.575,12.575,0,0,1-.83-5.513L.358,7.693A3.518,3.518,0,0,1,2.568,4.7L11.4,1.23a3.52,3.52,0,0,1,3.657.689L18.2,4.826a12.587,12.587,0,0,1,3.144,4.6l1.365,3.475-1.862.731.731,1.862-4.654,1.828-.731-1.862Zm7.58-9.424h0a1.5,1.5,0,0,0-.848,1.945h0a1.5,1.5,0,0,0,1.945.848h0a1.5,1.5,0,0,0,.847-1.945h0A1.5,1.5,0,0,0,16.325,8.965Zm-13.2,1.963L15.235,6.171l-2.214-2.05a.507.507,0,0,0-.523-.1L3.665,7.492a.5.5,0,0,0-.316.428Zm3.047,3.638h0a1.5,1.5,0,0,0-1.944-.848h0a1.5,1.5,0,0,0-.848,1.944h0a1.5,1.5,0,0,0,1.944.848h0A1.5,1.5,0,0,0,6.169,14.566Z"/></svg>

);
