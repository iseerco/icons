import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BasketShoppingSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.94,8C20.44,3.51,16.62,0,12,0S3.56,3.51,3.06,8H-.02l1.92,13.42c.21,1.47,1.49,2.58,2.97,2.58h14.27c1.48,0,2.76-1.11,2.97-2.58l1.92-13.42h-3.08ZM12,2c3.52,0,6.43,2.61,6.92,6H5.08c.49-3.39,3.4-6,6.92-6Zm8.12,19.14c-.07,.49-.5,.86-.99,.86H4.87c-.49,0-.92-.37-.99-.86l-1.59-11.14H21.71l-1.59,11.14Z"/></svg>

);
