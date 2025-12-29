import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,0H6c-1.654,0-3,1.346-3,3v21h18V3c0-1.654-1.346-3-3-3Zm-6,16s-4-2.667-4-5c0-1.105.895-2,2-2s2,.895,2,2c0-1.105.895-2,2-2s2,.895,2,2c0,2.333-4,5-4,5Z"/>
</svg>

);
