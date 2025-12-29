import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PesoSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,9h-2.07c.04-.33,.07-.66,.07-1s-.03-.67-.07-1h2.07c.55,0,1-.45,1-1s-.45-1-1-1h-2.59C18.22,2.07,15.35,0,12,0h-3c-2.76,0-5,2.24-5,5H2c-.55,0-1,.45-1,1s.45,1,1,1h2v2H2c-.55,0-1,.45-1,1s.45,1,1,1h2v12c0,.55,.45,1,1,1s1-.45,1-1v-7h6c3.35,0,6.22-2.07,7.41-5h2.59c.55,0,1-.45,1-1s-.45-1-1-1ZM9,2h3c2.22,0,4.15,1.21,5.19,3H6c0-1.65,1.35-3,3-3Zm-3,5h11.91c.06,.33,.09,.66,.09,1s-.04,.67-.09,1H6v-2Zm6,7H6v-3h11.19c-1.04,1.79-2.97,3-5.19,3Z"/></svg>

);
