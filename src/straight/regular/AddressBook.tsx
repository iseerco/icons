import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AddressBook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H3V3H1V5H3V7H1V9H3v2H1v2H3v2H1v2H3v2H1v2H3v3H20a3,3,0,0,0,3-3V3A3,3,0,0,0,20,0Zm1,21a1,1,0,0,1-1,1H5V2H20a1,1,0,0,1,1,1Zm-8-9a3,3,0,1,0-3-3A3,3,0,0,0,13,12Zm5,4v2H16V16a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1v2H8V16a3,3,0,0,1,3-3h4A3,3,0,0,1,18,16Z"/></svg>

);
