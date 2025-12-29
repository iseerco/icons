import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWatchSmart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,2.338V0h-3v2h-8V0h-3v2.338c-1.181.563-2,1.769-2,3.162v13c0,1.393.819,2.599,2,3.162v2.338h3v-2h8v2h3v-2.338c1.181-.563,2-1.769,2-3.162V5.5c0-1.393-.819-2.599-2-3.162Zm-1,16.162c0,.275-.225.5-.5.5H6.5c-.275,0-.5-.225-.5-.5V5.5c0-.275.225-.5.5-.5h11c.275,0,.5.225.5.5v13Zm-4.5-7.121l2.561,2.561-2.121,2.121-3.439-3.439v-5.621h3v4.379Z"/></svg>

);
