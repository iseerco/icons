import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrPyramid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.705,20.087L14.212,1.366c-.427-.843-1.274-1.366-2.212-1.366s-1.786.523-2.212,1.365L.295,20.087c-.429.847-.389,1.834.107,2.642.489.796,1.335,1.271,2.264,1.271h18.667c.929,0,1.775-.476,2.264-1.271.497-.808.537-1.795.107-2.642Zm-.959,2.118c-.306.498-.833.795-1.412.795H2.667c-.578,0-1.106-.297-1.412-.795-.313-.51-.338-1.132-.068-1.665L10.679,1.817c.26-.512.753-.817,1.321-.817s1.061.306,1.321.818l9.492,18.722c.271.533.245,1.155-.068,1.665Z"/>
</svg>

);
