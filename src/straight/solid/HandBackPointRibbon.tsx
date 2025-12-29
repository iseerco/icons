import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HandBackPointRibbon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.991,2h-3.991C8,.785,9.083-.176,10.336,.027c.948,.154,1.608,1.018,1.655,1.973Zm10.009,8.865l-10-1.865h-4v8h-2v-5.435l-3.121,3.071c-1.134,1.134-1.134,3.11,0,4.243l5.121,5.122h14V10.865Zm-10-3.865v-3H3l2,1.5-2,1.5H12Z"/></svg>

);
