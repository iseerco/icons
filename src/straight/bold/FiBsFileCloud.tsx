import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFileCloud = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17,15.5c0,1.381-1.119,2.5-2.5,2.5h-5.674c-1.009,0-1.826-.818-1.826-1.826,0-.968,.755-1.752,1.707-1.814-.127-.348-.207-.718-.207-1.109,0-1.795,1.455-3.25,3.25-3.25,1.726,0,3.124,1.349,3.23,3.048,1.151,.224,2.02,1.235,2.02,2.452Zm5-9.836V24H2V3C2,1.346,3.346,0,5,0h11.382l5.618,5.664Zm-3,15.336V8h-5V3H5V21h14Z"/>
</svg>

);
