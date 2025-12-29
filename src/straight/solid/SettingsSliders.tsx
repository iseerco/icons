import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SettingsSliders = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.874,3A4,4,0,0,0,3.126,3H0V5H3.126a4,4,0,0,0,7.748,0H24V3Z"/><path d="M17,8a4,4,0,0,0-3.874,3H0v2H13.126a4,4,0,0,0,7.748,0H24V11H20.874A4,4,0,0,0,17,8Z"/><path d="M7,16a4,4,0,0,0-3.874,3H0v2H3.126a4,4,0,0,0,7.748,0H24V19H10.874A4,4,0,0,0,7,16Z"/></svg>

);
