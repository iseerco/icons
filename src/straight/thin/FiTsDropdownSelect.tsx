import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDropdownSelect = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.5,0H2.5C1.121,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23Zm-12.326-7.049c.365,.366,.846,.548,1.326,.548s.961-.183,1.326-.548l5.95-5.951H4.724l5.95,5.951Zm1.945-.707c-.342,.342-.896,.341-1.238,0l-4.243-4.244h9.725l-4.243,4.244Z"/>
</svg>

);
