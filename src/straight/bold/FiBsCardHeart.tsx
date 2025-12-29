import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCardHeart = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16,11c0,2.333-4,5-4,5,0,0-4-2.667-4-5,0-1.105.895-2,2-2s2,.895,2,2c0-1.105.895-2,2-2s2,.895,2,2Zm5-7.5v20.5H3V3.5c0-1.93,1.57-3.5,3.5-3.5h11c1.93,0,3.5,1.57,3.5,3.5Zm-3,0c0-.276-.225-.5-.5-.5H6.5c-.276,0-.5.224-.5.5v17.5h12V3.5Z"/>
</svg>

);
