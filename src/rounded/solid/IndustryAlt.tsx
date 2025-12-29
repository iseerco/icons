import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IndustryAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.97,6.251c-.637-.354-1.415-.331-2.1.101l-3.74,4.148v-2.5c0-.727-.395-1.397-1.03-1.749-.637-.354-1.416-.331-2.1.101l-4,4.15v7.499c0,.552-.447,1-1,1s-1-.448-1-1V2c.553,0,1-.448,1-1s-.447-1-1-1H1C.447,0,0,.448,0,1s.447,1,1,1v17c0,2.757,2.243,5,5,5h13c2.757,0,5-2.243,5-5v-11c0-.727-.395-1.397-1.03-1.749Zm-6.97,11.749c0,.552-.448,1-1,1h-1c-.552,0-1-.448-1-1v-1c0-.552.448-1,1-1h1c.552,0,1,.448,1,1v1Zm5,0c0,.552-.448,1-1,1h-1c-.552,0-1-.448-1-1v-1c0-.552.448-1,1-1h1c.552,0,1,.448,1,1v1Z"/>
</svg>

);
