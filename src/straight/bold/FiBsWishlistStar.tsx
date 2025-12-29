import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWishlistStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,0H4.5C2.846,0,1.5,1.346,1.5,3v20.934l10.5-7.583,10.5,7.583V3c0-1.654-1.346-3-3-3Zm0,18.066l-7.5-5.417-7.5,5.417V3h15v15.066Zm-9.325-9.22l-2.212-1.231v-.615h2.899l.784-3h.648l.784,3h2.883v.611l-2.197,1.273.884,2.686-.504.349-2.173-1.68-2.183,1.687-.48-.362.869-2.717Z"/>
</svg>

);
