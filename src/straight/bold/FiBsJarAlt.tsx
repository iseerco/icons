import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsJarAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,3.261V0H4v3.261c-1.221,1.01-2,2.535-2,4.239v13c0,1.93,1.57,3.5,3.5,3.5h13c1.93,0,3.5-1.57,3.5-3.5V7.5c0-1.704-.779-3.23-2-4.239Zm-15,7.739h8v4H5v-4Zm14,9.5c0,.276-.225.5-.5.5H5.5c-.275,0-.5-.224-.5-.5v-2.5h11v-10H5v-.5c0-1.378,1.121-2.5,2.5-2.5h9c1.379,0,2.5,1.122,2.5,2.5v13Z"/>
</svg>

);
