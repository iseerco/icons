import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,11c0,2.333-4,5-4,5,0,0-4-2.667-4-5,0-1.105.895-2,2-2s2,.895,2,2c0-1.105.895-2,2-2s2,.895,2,2Zm5-8v21H3V3c0-1.654,1.346-3,3-3h12c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1H6c-.551,0-1,.449-1,1v19h14V3Z"/>
</svg>

);
