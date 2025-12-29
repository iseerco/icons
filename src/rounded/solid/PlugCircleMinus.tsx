import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlugCircleMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm2.5,7h-5c-.553,0-1-.447-1-1s.447-1,1-1h5c.553,0,1,.447,1,1s-.447,1-1,1Z"/>
  <path d="M10,18c0-4.079,3.055-7.438,7-7.931v-2.069c.553,0,1-.447,1-1s-.447-1-1-1h-3V1c0-.553-.447-1-1-1s-1,.447-1,1V6H6V1c0-.553-.447-1-1-1s-1,.447-1,1V6H1c-.553,0-1,.447-1,1s.447,1,1,1v3.101c0,4.024,3.062,7.354,7.008,7.839-.002,.247-.008,4.061-.008,4.061,0,.553,.447,1,1,1s1-.447,1-1v-5Z"/>
</svg>

);
