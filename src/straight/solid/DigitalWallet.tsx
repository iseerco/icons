import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DigitalWallet = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M1.5,21c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm0,0c-.828,0-1.5,.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm6.5,2h-2c0-2.757-2.243-5-5-5v-2c3.859,0,7,3.14,7,7Zm5,0h-2c0-5.514-4.486-10-10-10v-2c6.617,0,12,5.383,12,12ZM4,2H24V0H4C2.346,0,1,1.346,1,3v6c6.689,0,12.29,4.718,13.668,11h9.332V4H4c-.552,0-1-.449-1-1s.448-1,1-1Zm14.5,8.5c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Z"/>
</svg>

);
