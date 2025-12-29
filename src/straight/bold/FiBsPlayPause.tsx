import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPlayPause = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M1,21.208V2.82l10.715,6.841c.802,.504,1.286,1.382,1.285,2.342,0,.958-.487,1.836-1.302,2.349L1,21.208Zm3-12.914v7.428l5.806-3.721-5.806-3.707Zm19,12.706h-3V3h3V21Zm-5,0h-3V3h3V21Z"/></svg>

);
