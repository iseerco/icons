import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltSquareRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.464,10.865l-5.464-5v5.635H5v1H13v5.768l5.463-4.999c.341-.306,.537-.744,.537-1.202s-.195-.896-.536-1.202Zm-.673,1.663l-3.791,3.469v-7.862l3.791,3.469,.004,.003c.132,.119,.205,.281,.205,.458s-.073,.339-.209,.461ZM21.5,0H2.5C1.121,0,0,1.122,0,2.5V24H24V2.5c0-1.378-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5V23Z"/></svg>

);
