import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MusicSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M8,14c-0.8-0.6-1.9-1-3-1c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5v-3.8l-2-2V14L8,14z M5,21c-1.7,0-3-1.3-3-3s1.3-3,3-3  s3,1.3,3,3S6.7,21,5,21z M24,4c0-1.7-1.3-3-3-3H11C9.3,1,8,2.3,8,4v2.6L1.5,0L0,1.5L22.5,24l1.4-1.4l-1.2-1.2  c0.8-0.9,1.3-2.1,1.3-3.3C24,18,24,4,24,4z M10,4c0-0.6,0.4-1,1-1h10c0.6,0,1,0.4,1,1v10c-0.8-0.6-1.9-1-3-1c-1.2,0-2.4,0.5-3.3,1.3  L10,8.6C10,8.6,10,4,10,4z M17.1,15.7c0.5-0.4,1.2-0.7,1.9-0.7c1.7,0,3,1.3,3,3c0,0.7-0.2,1.4-0.7,1.9L17.1,15.7L17.1,15.7z"/>
</svg>

);
