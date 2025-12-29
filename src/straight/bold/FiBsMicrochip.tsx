import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMicrochip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M7,17h10V7H7v10Zm3-7h4v4h-4v-4Zm14-2v-3h-2.05c-.22-1.53-1.42-2.73-2.95-2.95V0h-3V2h-2.5V0h-3V2h-2.5V0h-3V2.05c-1.53,.22-2.73,1.42-2.95,2.95H0v3H2v2.5H0v3H2v2.5H0v3H2c0,1.66,1.34,3,3,3v2h3v-2h2.5v2h3v-2h2.5v2h3v-2c1.66,0,3-1.34,3-3h2v-3h-2v-2.5h2v-3h-2v-2.5h2Zm-5,11H5V5.5c0-.28,.22-.5,.5-.5h13c.28,0,.5,.22,.5,.5v13.5Z"/></svg>

);
