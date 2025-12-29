import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Frame = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,19h-2V5h2c.553,0,1-.447,1-1s-.447-1-1-1h-2V1c0-.553-.447-1-1-1s-1,.447-1,1v2H5V1c0-.553-.448-1-1-1s-1,.447-1,1v2H1c-.552,0-1,.447-1,1s.448,1,1,1h2v14H1c-.552,0-1,.447-1,1s.448,1,1,1h2v2c0,.553.448,1,1,1s1-.447,1-1v-2h14v2c0,.553.447,1,1,1s1-.447,1-1v-2h2c.553,0,1-.447,1-1s-.447-1-1-1Zm-18,0V5h14v14H5Z"/>
</svg>

);
