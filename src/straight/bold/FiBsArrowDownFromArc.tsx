import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsArrowDownFromArc = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.943,15.935l2.113,2.131-5.221,5.177c-.505.504-1.169.757-1.834.757s-1.334-.254-1.842-.762l-5.217-5.172,2.113-2.131,3.443,3.415V7h3v12.349l3.443-3.415ZM12,0C5.383,0,0,5.383,0,12h3C3,7.038,7.037,3,12,3s9,4.038,9,9h3C24,5.383,18.617,0,12,0Z"/>
</svg>

);
