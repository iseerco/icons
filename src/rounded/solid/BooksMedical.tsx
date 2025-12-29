import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BooksMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8,12c0,.552-.447,1-1,1h-2v2c0,.552-.447,1-1,1s-1-.448-1-1v-2H1c-.553,0-1-.448-1-1s.447-1,1-1h2v-2c0-.552.447-1,1-1s1,.448,1,1v2h2c.553,0,1,.448,1,1Zm-5,9c0,1.657,1.343,3,3,3h2v-5H3v2ZM3,3v2h5V0h-2c-1.657,0-3,1.343-3,3Zm7,14h5V7h-5v10Zm0,7h2c1.657,0,3-1.343,3-3v-2h-5v5ZM20.941,6.091l-5.601,1.064,2.169,10.859,5.601-1.064-2.169-10.859Zm3.024,15.217l-.479-2.393-5.601,1.064.48,2.396c.207,1.084,1.254,1.796,2.338,1.59l1.672-.317c1.086-.206,1.798-1.254,1.591-2.34Zm-3.399-17.181l-.477-2.5c-.206-1.085-1.253-1.797-2.338-1.591l-1.672.317c-.684.13-1.219.595-1.47,1.193-.513-.918-1.482-1.546-2.609-1.546h-2v5h5.967l4.599-.874Z"/></svg>

);
