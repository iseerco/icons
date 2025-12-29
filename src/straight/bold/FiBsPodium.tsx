import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPodium = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10H5v-3.5c0-1.378,1.122-2.5,2.5-2.5h.75c.456,.607,1.182,1,2,1h4.25c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5h-4.25c-.818,0-1.544,.393-2,1h-.75C4.467,1,2,3.467,2,6.5v3.5H0v3H2.248l2,11H20.31l1.5-11h2.191v-3Zm-6.31,11H6.752l-1.455-8h13.484l-1.091,8Z"/></svg>

);
