import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tombstone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16,10c0,.553-.448,1-1,1h-2v5c0,.553-.448,1-1,1s-1-.447-1-1v-5h-2c-.552,0-1-.447-1-1s.448-1,1-1h2v-2c0-.553.448-1,1-1s1,.447,1,1v2h2c.552,0,1,.447,1,1Zm8,13c0,.553-.448,1-1,1H1c-.552,0-1-.447-1-1s.448-1,1-1h1v-12C2,4.486,6.486,0,12,0s10,4.486,10,10v12h1c.552,0,1,.447,1,1Zm-20-1h16v-12c0-4.411-3.589-8-8-8S4,5.589,4,10v12Z"/></svg>

);
