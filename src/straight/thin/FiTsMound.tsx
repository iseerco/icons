import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.849,9.884c-.99-1.792-2.803-2.861-4.849-2.861s-3.859,1.069-4.849,2.861L0,22.823v1.177h24v-1.177l-7.151-12.939ZM1.045,23l6.981-12.632c.812-1.468,2.297-2.344,3.974-2.344s3.163.876,3.974,2.344l6.981,12.632H1.045Z"/>
</svg>

);
