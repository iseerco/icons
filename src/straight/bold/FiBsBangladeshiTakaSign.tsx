import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBangladeshiTakaSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,11.5v2c0,5.79-4.71,10.5-10.5,10.5h-3c-1.93,0-3.5-1.57-3.5-3.5V11H2v-3h3V3.5c0-.28-.22-.5-.5-.5H2V0h2.5c1.93,0,3.5,1.57,3.5,3.5v4.5h3v3h-3v9.5c0,.28,.22,.5,.5,.5h3c4.14,0,7.5-3.36,7.5-7.5v-2c0-.28-.22-.5-.5-.5h-3.5v-3h3.5c1.93,0,3.5,1.57,3.5,3.5Z"/></svg>

);
