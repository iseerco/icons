import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LocationCrosshairs = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.949,11c-.471-4.717-4.232-8.479-8.949-8.949V0h-2V2.051C6.283,2.521,2.521,6.283,2.051,11H0v2H2.051c.471,4.717,4.232,8.479,8.949,8.949v2.051h2v-2.051c4.717-.471,8.479-4.232,8.949-8.949h2.051v-2h-2.051Zm-9.949,6c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm3-5c0,1.654-1.346,3-3,3s-3-1.346-3-3,1.346-3,3-3,3,1.346,3,3Z"/></svg>

);
