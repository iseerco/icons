import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SensorAlert = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,3V20.474l-2-3.428V3c0-.551-.448-1-1-1H3c-.551,0-1,.449-1,1V22h3.11l-1.167,2H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3ZM5,4c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm5,1c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Zm-3.741,19h5.741v-2h-2.259l5.259-9.015,5.259,9.015h-2.259v2h5.741L15,9.015,6.259,24Zm7.741-3h2v-4h-2v4Zm0,3h2v-2h-2v2Z"/></svg>

);
