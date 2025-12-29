import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Grate = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,0v11h-4V0h4Zm8,11h5V3c0-1.654-1.346-3-3-3h-2v11Zm-8,13v-11h-4v11h4Zm6-11h-4v11h4v-11Zm-12-2V0h-2C1.346,0,0,1.346,0,3v8h5ZM13,0v11h4V0h-4Zm6,13v11h5v-11h-5Zm-14,0H0v11h5v-11Z"/>
</svg>

);
