import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowAltSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M17.768,11.448c.308,.304,.308,.8,0,1.104l-4.243,4.188c-.566,.559-1.525,.158-1.525-.638v-2.602H7.5c-.828,0-1.5-.671-1.5-1.5s.672-1.5,1.5-1.5h4.5v-2.602c0-.795,.959-1.197,1.525-.638l4.243,4.188Zm6.232-5.948v13c0,3.033-2.468,5.5-5.5,5.5H5.5c-3.032,0-5.5-2.467-5.5-5.5V5.5C0,2.467,2.468,0,5.5,0h13c3.032,0,5.5,2.467,5.5,5.5Zm-3,0c0-1.378-1.121-2.5-2.5-2.5H5.5c-1.379,0-2.5,1.122-2.5,2.5v13c0,1.378,1.121,2.5,2.5,2.5h13c1.379,0,2.5-1.122,2.5-2.5V5.5Z"/></svg>

);
