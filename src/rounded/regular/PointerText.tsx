import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PointerText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,23c0,.553-.447,1-1,1h-1c-1.641,0-3.088-.806-4-2.031-.912,1.225-2.359,2.031-4,2.031h-1c-.553,0-1-.447-1-1s.447-1,1-1h1c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3h-1c-.553,0-1-.447-1-1s.447-1,1-1h1c1.641,0,3.088,.806,4,2.031,.912-1.225,2.359-2.031,4-2.031h1c.553,0,1,.447,1,1s-.447,1-1,1h-1c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h1c.553,0,1,.447,1,1Z"/>
</svg>

);
