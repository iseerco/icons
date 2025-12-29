import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.542,10.892l-4.717-4.717-.707.707,4.618,4.618H0v1h22.734l-4.617,4.617.707.707,4.718-4.718c.61-.61.61-1.604,0-2.214Z"/>
</svg>

);
