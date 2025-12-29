import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLockOpenAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,18h-4v-3h4v3Zm13-12h-3c0-1.654-1.346-3-3-3s-3,1.346-3,3v3h3v11.5c0,1.93-1.57,3.5-3.5,3.5H3.5c-1.93,0-3.5-1.57-3.5-3.5v-11.5h12v-3c0-3.309,2.691-6,6-6s6,2.691,6,6Zm-9,6H3v8.5c0,.275.224.5.5.5h11c.276,0,.5-.225.5-.5v-8.5Z"/>
</svg>

);
