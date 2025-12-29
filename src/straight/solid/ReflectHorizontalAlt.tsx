import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ReflectHorizontalAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15.758,10.291c-.489,.441-.758,1.048-.758,1.709,0,.647,.277,1.268,.753,1.693l8.247,7.547V2.75l-8.242,7.541ZM0,2.75V21.24l8.239-7.539c.483-.434,.761-1.054,.761-1.701,0-.661-.269-1.268-.753-1.705L0,2.75ZM11,0h2V24h-2V0Z"/>
</svg>

);
