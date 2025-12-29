import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFilePowerpoint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,17c0,.55-.45,1-1,1h-1v-2h1c.55,0,1,.45,1,1Zm9,7H2V3c0-1.65,1.35-3,3-3h11.38l5.62,5.66V24ZM5,12h14V8h-5V3H5V12Zm10,5c0-1.66-1.34-3-3-3h-3v8h2v-2h1c1.66,0,3-1.34,3-3Z"/></svg>

);
