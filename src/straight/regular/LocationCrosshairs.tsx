import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LocationCrosshairs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,7c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,8c-1.654,0-3-1.346-3-3s1.346-3,3-3,3,1.346,3,3-1.346,3-3,3Zm12-4h-2.05c-.471-4.717-4.233-8.48-8.95-8.95V0h-2V2.05C6.283,2.52,2.52,6.283,2.05,11H0v2H2.05c.471,4.717,4.233,8.48,8.95,8.95v2.05h2v-2.05c4.717-.471,8.48-4.233,8.95-8.95h2.05v-2Zm-12,9c-4.411,0-8-3.589-8-8S7.589,4,12,4s8,3.589,8,8-3.589,8-8,8Z"/></svg>

);
