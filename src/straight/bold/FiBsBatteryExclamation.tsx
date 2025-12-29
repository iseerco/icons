import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBatteryExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0,4h7v3H3v10h4v3H0V4Zm24,3.967h-2v-.467c0-1.93-1.57-3.5-3.5-3.5h-3.5v3h3.5c.275,0,.5.225.5.5v9c0,.275-.225.5-.5.5h-3.5v3h3.5c1.93,0,3.5-1.57,3.5-3.5v-.5h2V7.967Zm-14.5,12.033h3v-3h-3v3Zm0-4.911h3V4h-3v11.089Z"/></svg>

);
