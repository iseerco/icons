import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TrashXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,4h-6v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2H1v2h1.644l1.703,15.331c.169,1.521,1.451,2.669,2.982,2.669h9.304c1.531,0,2.813-1.147,2.981-2.669l1.703-15.331h1.682v-2Zm-14-2h6v2h-6v-2Zm8.626,19.11c-.056.507-.483.89-.994.89H7.329c-.51,0-.938-.383-.994-.89l-1.679-15.11h14.65l-1.679,15.11Zm-9.583-4.567l2.543-2.543-2.543-2.543,1.414-1.414,2.543,2.543,2.543-2.543,1.414,1.414-2.543,2.543,2.543,2.543-1.414,1.414-2.543-2.543-2.543,2.543-1.414-1.414Z"/>
</svg>

);
