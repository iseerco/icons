import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSettingsSliders = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.7,2.625a3.481,3.481,0,0,0-6.3,0H0v3H4.395a3.481,3.481,0,0,0,6.3,0H24v-3Z"/><path d="M16.455,8.5a3.492,3.492,0,0,0-3.151,2H0v3H13.3a3.481,3.481,0,0,0,6.3,0H24v-3H19.605A3.492,3.492,0,0,0,16.455,8.5Z"/><path d="M7.545,16.375a3.492,3.492,0,0,0-3.15,2H0v3H4.395a3.481,3.481,0,0,0,6.3,0H24v-3H10.7A3.492,3.492,0,0,0,7.545,16.375Z"/></svg>

);
