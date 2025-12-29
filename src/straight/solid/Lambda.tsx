import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lambda = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.736,22c-.382,0-.725-.212-.895-.553L9.947,1.658c-.512-1.022-1.54-1.658-2.684-1.658h-3.264v2h3.264c.382,0,.725.212.895.553l2.195,4.389L1.5,24h2.253l7.709-14.84,6.591,13.182c.512,1.022,1.54,1.658,2.684,1.658h3.264v-2h-3.264Z"/>
</svg>

);
