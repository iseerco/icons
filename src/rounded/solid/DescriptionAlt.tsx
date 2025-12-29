import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DescriptionAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,8c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Zm0,9c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Zm-5.5-8c0,.552-.447,1-1,1H1c-.553,0-1-.448-1-1s.447-1,1-1h13c.553,0,1,.448,1,1ZM0,13c0-.552.447-1,1-1h10c.553,0,1,.448,1,1s-.447,1-1,1H1c-.553,0-1-.448-1-1Zm15,5c0,.552-.447,1-1,1H1c-.553,0-1-.448-1-1s.447-1,1-1h13c.553,0,1,.448,1,1Zm-3,4c0,.552-.447,1-1,1H1c-.553,0-1-.448-1-1s.447-1,1-1h10c.553,0,1,.448,1,1ZM3,6h18c1.654,0,3-1.346,3-3s-1.346-3-3-3H3C1.346,0,0,1.346,0,3s1.346,3,3,3Z"/>
</svg>

);
