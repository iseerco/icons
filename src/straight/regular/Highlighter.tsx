import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Highlighter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.121,3.539l-2.66-2.66c-1.124-1.125-2.933-1.176-4.119-.116L2,13.552v7.034l-1.707,1.707,1.414,1.414,1.707-1.707h7.034L23.238,7.658c1.059-1.186,1.007-2.996-.117-4.12ZM4,15.352l4.648,4.648H4v-4.648ZM21.746,6.327l-11.287,12.656-5.442-5.442L17.674,2.255h0c.395-.353,.998-.337,1.373,.038l2.66,2.66c.375,.375,.392,.979,.039,1.374Z"/></svg>

);
