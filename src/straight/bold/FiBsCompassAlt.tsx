import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCompassAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13.5,2.115V0h-3V2.115C5.143,2.85,1,7.445,1,13c0,6.065,4.935,11,11,11s11-4.935,11-11c0-5.555-4.143-10.15-9.5-10.885Zm0,18.739v-1.854h-3v1.854c-3.209-.612-5.742-3.145-6.354-6.354h1.854v-3h-1.854c.612-3.209,3.145-5.742,6.354-6.354v1.854h3v-1.854c3.209,.612,5.742,3.145,6.354,6.354h-1.854v3h1.854c-.612,3.209-3.145,5.742-6.354,6.354Zm.31-9.664l2.714,6.333-6.333-2.714-2.714-6.333,6.333,2.714Z"/>
</svg>

);
