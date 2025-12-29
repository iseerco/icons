import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsWatchFitness = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,2.338V0h-3v2h-8V0h-3v2.338c-1.181.563-2,1.769-2,3.162v13c0,1.393.819,2.599,2,3.162v2.338h3v-2h8v2h3v-2.338c1.181-.563,2-1.769,2-3.162V5.5c0-1.393-.819-2.599-2-3.162Zm-1,16.162c0,.275-.225.5-.5.5H6.5c-.275,0-.5-.225-.5-.5V5.5c0-.275.225-.5.5-.5h11c.275,0,.5.225.5.5v13Zm-2-7.34c0,2.262-4,5.04-4,5.04,0,0-4-2.778-4-5.04,0-1.193.895-2.16,2-2.16s2,.807,2,2c0-1.193.895-2,2-2s2,.967,2,2.16Z"/></svg>

);
