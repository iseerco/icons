import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SolarPanel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,22h5v2H6v-2h5v-4h-2.166l.267-8h5.799l.267,8h-2.166v4ZM14.566,0h-5.132l-.267,8h5.666l-.267-8Zm8.072,8l-.714-5.395c-.197-1.485-1.476-2.605-2.974-2.605h-2.382l.267,8h5.804ZM7.433,0h-2.382c-1.499,0-2.777,1.12-2.974,2.606l-.714,5.394h5.804l.267-8Zm9.735,18h6.794l-1.059-8h-6.002l.267,8ZM7.099,10H1.098L.039,18h6.794l.267-8Z"/>
</svg>

);
