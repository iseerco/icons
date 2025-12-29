import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MusicSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M24,4c0-1.7-1.3-3-3-3H11C9.3,1,8,2.3,8,4v2.6L1.5,0L0,1.5L22.5,24l1.4-1.4l-1.2-1.2c0.8-0.9,1.3-2.1,1.3-3.3  c0-0.2,0-0.3-0.1-0.5H24C24,17.5,24,4,24,4z M22,14c-0.8-0.6-1.9-1-3-1c-1.2,0-2.4,0.5-3.3,1.3L10,8.6V4c0-0.6,0.4-1,1-1h10  c0.6,0,1,0.4,1,1C22,4,22,14,22,14z M8,14c-0.8-0.6-1.9-1-3-1c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5v-3.8l-2-2V14L8,14z"/>
</svg>

);
