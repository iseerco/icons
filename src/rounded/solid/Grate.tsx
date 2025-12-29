import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Grate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,0v11h-4V0h4Zm8,11h5v-6c0-2.761-2.239-5-5-5h0v11Zm-8,13v-11h-4v11h4Zm6-11h-4v11h4v-11Zm-12-2V0h0C2.239,0,0,2.239,0,5v6h5ZM13,0v11h4V0h-4Zm6,13v11h0c2.761,0,5-2.239,5-5v-6h-5Zm-14,0H0v6c0,2.761,2.239,5,5,5h0v-11Z"/>
</svg>

);
