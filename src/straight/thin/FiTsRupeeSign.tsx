import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRupeeSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15,7.5C15,3.364,11.636,0,7.5,0H0V24H1V15H7.5c.463,0,.917-.043,1.357-.123l4.912,9.123h1.231l-5.065-9.406c2.944-1.013,5.065-3.81,5.065-7.094Zm-7.5,6.5H1V1H7.5c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5Zm15.5,3v-.5c0-.827-.673-1.5-1.5-1.5h-3c-.827,0-1.5,.673-1.5,1.5,0,.875,.628,1.612,1.492,1.752l3.174,.509c1.353,.219,2.334,1.37,2.334,2.739,0,1.379-1.121,2.5-2.5,2.5h-3c-1.379,0-2.5-1.121-2.5-2.5v-.5h1v.5c0,.827,.673,1.5,1.5,1.5h3c.827,0,1.5-.673,1.5-1.5,0-.875-.628-1.612-1.492-1.752l-3.174-.509c-1.353-.219-2.334-1.37-2.334-2.739,0-1.379,1.121-2.5,2.5-2.5h3c1.379,0,2.5,1.121,2.5,2.5v.5h-1Z"/></svg>

);
