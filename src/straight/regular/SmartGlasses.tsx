import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SmartGlasses = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 5h-18c-1.654 0-3 1.346-2.995 3.1l1.089 10.9h8.008l2.518-4.765c.105-.199.284-.229.38-.229.097 0 .274.03.38.229l2.518 4.765h8.007l1.096-11c0-1.654-1.346-3-3-3zm-18 2h4v2h-4.9l-.1-1c0-.551.449-1 1-1zm18.095 10h-4.992l-1.954-3.699c-.422-.799-1.245-1.295-2.148-1.295-.903 0-1.727.496-2.149 1.294l-1.955 3.7h-4.993l-.603-6h6.699v-4h12c.551 0 1 .449 1.005.9z"/></svg>
);
