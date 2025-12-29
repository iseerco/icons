import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsUiUx = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,11.5v1H0v-1h24Zm-8,12.5h1v-9h-1v9Zm-3-3.5c0,1.379-1.121,2.5-2.5,2.5s-2.5-1.121-2.5-2.5v-5.5h-1v5.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-5.5h-1v5.5Zm-4.5-11.5c1.93,0,3.5-1.57,3.5-3.5V0h-1v5.5c0,1.379-1.121,2.5-2.5,2.5s-2.5-1.121-2.5-2.5V0h-1v5.5c0,1.93,1.57,3.5,3.5,3.5Zm6.159,0l2.091-3.523,2.091,3.523h1.159l-2.67-4.5,2.67-4.5h-1.159l-2.091,3.523-2.091-3.523h-1.159l2.67,4.5-2.67,4.5h1.159Z"/>
</svg>

);
