import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CoffeeMaker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23,9h-4v-2c1.654,0,3-1.346,3-3v-1c0-1.654-1.346-3-3-3H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5H21c.552,0,1-.448,1-1s-.448-1-1-1h-4c2.206,0,4-1.794,4-4v-2c0-1.103-.897-2-2-2h-6c-1.103,0-2,.897-2,2v2c0,2.206,1.794,4,4,4h-6V7h4v3c0,1.103,.897,2,2,2h2c.737,0,1.375-.405,1.722-1h4.278c.552,0,1-.448,1-1s-.448-1-1-1Zm-10,9v-2h6v2c0,1.103-.897,2-2,2h-2c-1.103,0-2-.897-2-2ZM8,5c-.552,0-1,.448-1,1V22h-2c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c.551,0,1,.449,1,1v1c0,.551-.449,1-1,1H8Zm7,5v-3h2v2.993s0,.005,0,.007h-2ZM6,6.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5,1.5,.672,1.5,1.5Z"/>
</svg>

);
