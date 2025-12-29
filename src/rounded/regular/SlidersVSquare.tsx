import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SlidersVSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14Zm-11-10c0,.553-.447,1-1,1h-1v8c0,.553-.447,1-1,1s-1-.447-1-1v-8h-1c-.553,0-1-.447-1-1s.447-1,1-1h1v-2c0-.553.447-1,1-1s1,.447,1,1v2h1c.553,0,1,.447,1,1Zm8,6c0,.553-.447,1-1,1h-1v2c0,.553-.447,1-1,1s-1-.447-1-1v-2h-1c-.553,0-1-.447-1-1s.447-1,1-1h1V6c0-.553.447-1,1-1s1,.447,1,1v8h1c.553,0,1,.447,1,1Z"/></svg>

);
