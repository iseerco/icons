import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,3c-.552,0-1,.448-1,1v7H6v-3.361c0-.695-.852-1.044-1.35-.552L.232,11.448c-.309,.305-.309,.799,0,1.104l4.418,4.361c.498,.492,1.35,.143,1.35-.552v-3.361H22v7c0,.552,.448,1,1,1s1-.448,1-1V4c0-.552-.448-1-1-1Z"/></svg>

);
