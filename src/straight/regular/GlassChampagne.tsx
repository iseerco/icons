import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GlassChampagne = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13,18.901c3.387-.488,6-3.409,5.996-7.011l-1.083-11.89H6.087l-1.087,11.981c0,3.519,2.613,6.432,6,6.92v3.099h-4v2h10v-2h-4v-3.099Zm3.087-16.901l.274,3H7.64l.273-3h8.174ZM6.996,12.072l.462-5.072h9.087l.455,4.981c0,2.757-2.243,5-5,5s-5-2.243-5.004-4.909Z"/></svg>

);
