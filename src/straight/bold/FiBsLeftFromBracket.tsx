import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLeftFromBracket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,7.012h-7V-.026L.969,9.677C.344,10.3,0,11.129,0,12.011c0,.882,.346,1.71,.971,2.332l10.029,9.683v-7.026h7V7.012Zm-3,7h-7v2.948L3.081,12.21c-.066-.069-.081-.147-.081-.201,0-.055,.015-.136,.07-.191l4.93-4.769v2.951h7v4.012ZM24,3.5V20.5c0,1.93-1.57,3.5-3.5,3.5h-5.5v-3h5.5c.275,0,.5-.224,.5-.5V3.5c0-.276-.225-.5-.5-.5h-5.5V0h5.5c1.93,0,3.5,1.57,3.5,3.5Z"/>
</svg>

);
