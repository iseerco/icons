import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AddressBook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H3V3H1V5H3V7H1V9H3v2H1v2H3v2H1v2H3v2H1v2H3v3H20a3,3,0,0,0,3-3V3A3,3,0,0,0,20,0ZM13,4A3.5,3.5,0,1,1,9.5,7.5,3.5,3.5,0,0,1,13,4Zm6,14H17V16a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v2H7V16a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3ZM11.5,7.5A1.5,1.5,0,1,1,13,9,1.5,1.5,0,0,1,11.5,7.5Z"/></svg>

);
