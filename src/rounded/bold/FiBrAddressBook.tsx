import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAddressBook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.5,0h-9A5.5,5.5,0,0,0,3.607,3H2.5a1.5,1.5,0,0,0,0,3H3V8H2.5a1.5,1.5,0,0,0,0,3H3v2H2.5a1.5,1.5,0,0,0,0,3H3v2H2.5a1.5,1.5,0,0,0,0,3H3.607A5.5,5.5,0,0,0,8.5,24h9A5.506,5.506,0,0,0,23,18.5V5.5A5.506,5.506,0,0,0,17.5,0ZM20,18.5A2.5,2.5,0,0,1,17.5,21h-9A2.5,2.5,0,0,1,6,18.5V5.5A2.5,2.5,0,0,1,8.5,3h9A2.5,2.5,0,0,1,20,5.5Zm-9.5-9a2.5,2.5,0,0,1,5,0A2.5,2.5,0,0,1,10.5,9.5Zm6.488,6.732a.665.665,0,0,1-.673.768H9.654a.665.665,0,0,1-.673-.768C9.842,11.965,16.128,11.968,16.988,16.232Z"/></svg>

);
