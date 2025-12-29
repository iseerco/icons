import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonCarryBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,5h-3c-1.379,0-2.5,1.122-2.5,2.5v3.5h-1.382l-1.671-3.342c-.512-1.023-1.54-1.658-2.684-1.658h-1.764c-1.379,0-2.5,1.122-2.5,2.5v5.661c0,.863.457,1.68,1.202,2.137l3.798,2.27v5.433h2v-6.567l-4.763-2.846c-.146-.09-.237-.253-.237-.426v-5.661c0-.276.225-.5.5-.5h1.5v5.31l2,1.195v-4.269l1.382,2.764h8.118c1.379,0,2.5-1.122,2.5-2.5v-3c0-1.378-1.121-2.5-2.5-2.5Zm.5,5.5c0,.276-.225.5-.5.5h-3.5v-3.5c0-.276.225-.5.5-.5h3c.275,0,.5.224.5.5v3ZM4,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm0,16.007l2,1.195v4.298h-2v-5.493Z"/>
</svg>

);
