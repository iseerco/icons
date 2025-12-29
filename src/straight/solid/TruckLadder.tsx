import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TruckLadder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M0,3H2V7H0v2H14v-2h-2V3h2V1H0V3Zm4,0h2V7h-2V3Zm6,4h-2V3h2V7Zm1.942,14c.034,.162,.058,.328,.058,.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172,.024-.338,.058-.5h4.885Zm-7,0c.034,.162,.058,.328,.058,.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172,.024-.338,.058-.5H4.942ZM0,11H14v8H0V11Zm21.942,10c.034,.162,.058,.328,.058,.5,0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5c0-.172,.024-.338,.058-.5h4.885Zm1.778-9h-7.721V6h3.559c1.293,0,2.437,.824,2.846,2.051l1.316,3.949Zm.279,2v5h-8v-5h8Z"/>
</svg>

);
