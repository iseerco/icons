import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Leader = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm12.5,20.5c0,.552-.447,1-1,1H3c-.553,0-1-.448-1-1,0-1.654,1.346-3,3-3h4V7.851c-.038-.022-6.615-5.14-6.615-5.14-.436-.34-.513-.968-.173-1.404.339-.435.967-.513,1.403-.172l6.229,4.865h3.655c1.93,0,3.5,1.57,3.5,3.5v3c0,1.391-.822,2.585-2,3.149v4.351h4c1.654,0,3,1.346,3,3Zm-11-3h2v-4h-2v4Z"/>
</svg>

);
