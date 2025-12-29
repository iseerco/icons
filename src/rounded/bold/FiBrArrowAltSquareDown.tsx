import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowAltSquareDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.74,13.525l-4.188,4.243c-.304,.308-.8,.308-1.104,0l-4.188-4.243c-.559-.566-.158-1.525,.638-1.525h2.602V7.5c0-.829,.671-1.5,1.5-1.5s1.5,.671,1.5,1.5v4.5h2.602c.795,0,1.196,.959,.638,1.525Zm7.26-8.025v13c0,3.033-2.467,5.5-5.5,5.5H5.5c-3.033,0-5.5-2.467-5.5-5.5V5.5C0,2.467,2.467,0,5.5,0h13c3.033,0,5.5,2.467,5.5,5.5Zm-3,0c0-1.378-1.122-2.5-2.5-2.5H5.5c-1.378,0-2.5,1.122-2.5,2.5v13c0,1.378,1.122,2.5,2.5,2.5h13c1.378,0,2.5-1.122,2.5-2.5V5.5Z"/></svg>

);
