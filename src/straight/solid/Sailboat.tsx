import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sailboat = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.744,24h-3.53C1.272,24,.153,16.208.143,16.129L-.004,15h24.026l-.157,1.137c-.011.078-1.186,7.863-10.121,7.863Zm10.23-11h-11.975l.009-12.981,11.966,12.981Zm-13.975,0H.127L10,1.865v11.135Z"/>
</svg>

);
