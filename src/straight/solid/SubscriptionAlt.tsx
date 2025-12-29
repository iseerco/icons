import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SubscriptionAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,16.462l9,3.538v4H5.538l-1.821-1.628c-.917-.858-.96-2.307-.098-3.23.861-.922,2.313-.97,3.235-.109.034.032,1.069.898,2.145,1.784v-8.817c0-1.215,1.083-2.176,2.336-1.973.983.16,1.664,1.083,1.664,2.08v4.355ZM21,0H3C1.346,0,0,1.346,0,3v8h7.126c.444-1.725,2.01-3,3.874-3s3.43,1.275,3.874,3h9.126V3c0-1.654-1.346-3-3-3Z"/>
</svg>

);
