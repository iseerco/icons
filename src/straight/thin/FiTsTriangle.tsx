import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTriangle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.851,22H.149L10.102,3.137c.394-.712,1.104-1.137,1.898-1.137s1.505.426,1.898,1.138l9.953,18.862Zm-22-1h20.298L13.024,3.623c-.432-.781-1.617-.78-2.047,0h0S1.851,21,1.851,21Z"/>
</svg>

);
