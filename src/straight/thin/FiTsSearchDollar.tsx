import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSearchDollar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24.001,23.294l-6.597-6.597c1.607-1.775,2.596-4.12,2.596-6.697C20,4.486,15.514,0,10,0S0,4.486,0,10s4.486,10,10,10c2.577,0,4.922-.989,6.697-2.596l6.597,6.597,.707-.707ZM1,10C1,5.037,5.038,1,10,1s9,4.037,9,9-4.037,9-9,9S1,14.963,1,10Zm13-2.5v.5h-1v-.5c0-.827-.673-1.5-1.5-1.5h-3c-.827,0-1.5,.673-1.5,1.5,0,.875,.628,1.612,1.493,1.752l3.173,.509c1.353,.219,2.334,1.37,2.334,2.739,0,1.379-1.122,2.5-2.5,2.5h-1v2h-1v-2h-1c-1.378,0-2.5-1.121-2.5-2.5v-.5h1v.5c0,.827,.673,1.5,1.5,1.5h3c.827,0,1.5-.673,1.5-1.5,0-.875-.628-1.612-1.493-1.752l-3.173-.509c-1.353-.219-2.334-1.37-2.334-2.739,0-1.379,1.122-2.5,2.5-2.5h1V3h1v2h1c1.378,0,2.5,1.121,2.5,2.5Z"/></svg>

);
