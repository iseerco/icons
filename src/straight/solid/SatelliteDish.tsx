import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SatelliteDish = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,12h-2c0-3.309-2.691-6-6-6v-2c4.411,0,8,3.589,8,8Zm-6,0h2c0-2.206-1.794-4-4-4v2c1.103,0,2,.897,2,2ZM12,0v2c5.514,0,10,4.486,10,10h2C24,5.383,18.617,0,12,0Zm-.799,14.213l6.213,6.214-.707.707c-1.908,1.907-4.415,2.861-6.92,2.861s-5.012-.953-6.92-2.861c-3.816-3.815-3.816-10.025,0-13.841l.707-.707,6.213,6.213,1.506-1.506,1.414,1.414-1.506,1.506Z"/>
</svg>

);
