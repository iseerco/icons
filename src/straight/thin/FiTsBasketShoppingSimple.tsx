import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBasketShoppingSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,9C21,4.04,16.96,0,12,0S3,4.04,3,9H.04l1.84,12.85c.17,1.22,1.24,2.15,2.47,2.15h15.27c1.24,0,2.3-.92,2.48-2.15l1.84-12.85h-2.94ZM12,1c4.41,0,8,3.59,8,8H4C4,4.59,7.59,1,12,1Zm9.11,20.71c-.1,.73-.74,1.29-1.49,1.29H4.35c-.74,0-1.38-.55-1.48-1.29L1.19,10H22.78l-1.67,11.71Z"/></svg>

);
