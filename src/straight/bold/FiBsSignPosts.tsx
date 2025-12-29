import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSignPosts = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5.5c0-1.758-1.308-3.204-3-3.449V0h-3v2H6V0h-3v2.051c-1.692.245-3,1.691-3,3.449v13.5h3v5h3v-5h12v5h3v-5h3V5.5Zm-3,10.5H3V5.5c0-.275.224-.5.5-.5h17c.276,0,.5.225.5.5v10.5Z"/>
</svg>

);
