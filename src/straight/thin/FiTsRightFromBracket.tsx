import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRightFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.236,10.165L13,.326V7H4v10H13v6.674l10.238-9.836c.492-.49,.763-1.143,.762-1.837s-.272-1.346-.764-1.835Zm-.697,2.958l-8.539,8.203v-5.326H5V8H14V2.674l8.533,8.203c.301,.3,.466,.699,.467,1.124,0,.427-.166,.827-.461,1.122ZM2.5,23h6.5v1H2.5c-1.378,0-2.5-1.121-2.5-2.5V2.5C0,1.122,1.122,0,2.5,0h6.5V1H2.5c-.827,0-1.5,.673-1.5,1.5V21.5c0,.827,.673,1.5,1.5,1.5Z"/>
</svg>

);
