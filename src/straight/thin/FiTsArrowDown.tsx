import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.117,18.118l-4.617,4.617V0h-1v22.734l-4.617-4.617-.707.707,4.718,4.718c.305.305.706.458,1.106.458s.803-.153,1.107-.458l4.717-4.717-.707-.707Z"/>
</svg>

);
