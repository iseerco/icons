import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltSquareLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,5.865l-5.465,5c-.34,.306-.535,.744-.535,1.201s.196,.896,.533,1.199l5.467,5.002v-5.768h8v-1H11V5.865Zm-1,10.132l-3.795-3.473c-.132-.119-.205-.281-.205-.458s.073-.34,.205-.458l3.795-3.473v7.862ZM21.5,0H2.5C1.122,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23Z"/></svg>

);
