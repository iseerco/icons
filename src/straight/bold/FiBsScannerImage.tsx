import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScannerImage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.761,15.831l.002-.003L3.438.33l-1.877,2.341,15.375,12.33H3.5c-1.93,0-3.5,1.57-3.5,3.5v5.5h24v-5.5c0-1.068-.482-2.026-1.239-2.669Zm-1.761,5.169H3v-2.5c0-.275.225-.5.5-.5h17c.275,0,.5.225.5.5v2.5Z"/>
</svg>

);
