import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsVenusDouble = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,7.5A7.486,7.486,0,0,0,12.005,1.51,7.5,7.5,0,1,0,6,14.849V19H4v3H6v2H9V22h2V19H9V14.844a7.52,7.52,0,0,0,3.005-1.354A7.463,7.463,0,0,0,15,14.849V19H13v3h2v2h3V22h2V19H18V14.849A7.513,7.513,0,0,0,24,7.5ZM3,7.5a4.479,4.479,0,0,1,7-3.724,7.441,7.441,0,0,0,0,7.448A4.479,4.479,0,0,1,3,7.5Zm9,0A4.5,4.5,0,1,1,16.5,12,4.505,4.505,0,0,1,12,7.5Z"/></svg>

);
