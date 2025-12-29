import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAddressBook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,0H3V3H1V6H3V8H1v3H3v2H1v3H3v2H1v3H3v3H19.5A3.5,3.5,0,0,0,23,20.5V3.5A3.5,3.5,0,0,0,19.5,0ZM20,20.5a.5.5,0,0,1-.5.5H6V3H19.5a.5.5,0,0,1,.5.5Zm-9.5-11A2.5,2.5,0,1,1,13,12,2.5,2.5,0,0,1,10.5,9.5ZM17,15v2H9V15a2,2,0,0,1,2-2h4A2,2,0,0,1,17,15Z"/></svg>

);
