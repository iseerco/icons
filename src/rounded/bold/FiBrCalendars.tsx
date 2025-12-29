import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCalendars = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,2.208v-.708c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5v.5h-5v-.5c0-.829-.672-1.5-1.5-1.5s-1.5,.671-1.5,1.5v.708c-2.306,.655-4,2.779-4,5.292v6c0,3.033,2.468,5.5,5.5,5.5h8c3.032,0,5.5-2.467,5.5-5.5V7.5c0-2.513-1.694-4.637-4-5.292Zm-1.5,13.792H10.5c-1.379,0-2.5-1.122-2.5-2.5v-5.5h13v5.5c0,1.378-1.121,2.5-2.5,2.5Zm.5,6.5c0,.829-.672,1.5-1.5,1.5H5.5c-3.032,0-5.5-2.467-5.5-5.5V9.5c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5v9c0,1.378,1.121,2.5,2.5,2.5h12c.828,0,1.5,.671,1.5,1.5Z"/></svg>

);
