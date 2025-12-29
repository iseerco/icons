import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrV = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24.011c-2.051,0-3.86-1.233-4.609-3.142L.101,2.042C-.198,1.269,.186,.4,.958,.102c.771-.301,1.641,.085,1.94,.856l7.287,18.82c.697,1.663,2.932,1.665,3.632-.007L21.101,.958c.299-.771,1.17-1.157,1.94-.856,.772,.299,1.156,1.167,.857,1.94l-7.287,18.82c-.752,1.915-2.562,3.148-4.612,3.148Z"/></svg>

);
