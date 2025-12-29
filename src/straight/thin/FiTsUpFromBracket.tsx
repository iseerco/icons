import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsUpFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M7,20h10V11h6.674L13.838,.762c-.49-.492-1.142-.762-1.836-.762h-.001c-.694,0-1.346,.272-1.835,.764L.326,11H7v9ZM2.674,10L10.877,1.467c.3-.301,.699-.466,1.124-.467h0c.426,0,.827,.166,1.121,.461l8.203,8.539h-5.326v9H8V10H2.674Zm21.326,5v6.5c0,1.379-1.121,2.5-2.5,2.5H2.5c-1.378,0-2.5-1.121-2.5-2.5v-6.5H1v6.5c0,.827,.673,1.5,1.5,1.5H21.5c.827,0,1.5-.673,1.5-1.5v-6.5h1Z"/>
</svg>

);
