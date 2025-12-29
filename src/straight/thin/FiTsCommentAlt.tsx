import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.5,0H2.5C1.122,0,0,1.121,0,2.5V20H7.106l3.897,3.283c.286,.254,.645,.38,1.001,.38,.353,0,.703-.123,.979-.368l3.985-3.295h7.032V2.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,19h-6.392l-4.276,3.535c-.19,.171-.476,.169-.675-.009l-4.187-3.526H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V19ZM12,7H6v-1h6v1Zm-6,3h12v1H6v-1Zm0,4h12v1H6v-1Z"/>
</svg>

);
