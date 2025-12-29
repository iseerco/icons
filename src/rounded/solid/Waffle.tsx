import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Waffle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10,10h4v4h-4v-4Zm14,2c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-8,2v-4h3c.552,0,1-.448,1-1s-.448-1-1-1h-3v-3c0-.552-.448-1-1-1s-1,.448-1,1v3h-4v-3c0-.552-.448-1-1-1s-1,.448-1,1v3h-3c-.552,0-1,.448-1,1s.448,1,1,1h3v4h-3c-.552,0-1,.448-1,1s.448,1,1,1h3v3c0,.552.448,1,1,1s1-.448,1-1v-3h4v3c0,.552.448,1,1,1s1-.448,1-1v-3h3c.552,0,1-.448,1-1s-.448-1-1-1h-3Z"/>
</svg>

);
