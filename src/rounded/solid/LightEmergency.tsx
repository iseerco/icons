import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LightEmergency = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,9v8c0,.553-.447,1-1,1H4c-.553,0-1-.447-1-1v-8C3,4.037,7.037,0,12,0s9,4.037,9,9Zm-8-3c0-.553-.447-1-1-1-2.206,0-4,1.794-4,4,0,.553.447,1,1,1s1-.447,1-1c0-1.103.897-2,2-2,.553,0,1-.447,1-1Zm8,14H3c-1.657,0-3,1.343-3,3h0c0,.552.448,1,1,1h22c.552,0,1-.448,1-1h0c0-1.657-1.343-3-3-3Z"/></svg>

);
