import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TextBoxDots = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,3H5C2.243,3,0,5.243,0,8v8c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-8c0-2.757-2.243-5-5-5Zm3,13c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3v-8c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v8Zm-10-8c0,.553-.448,1-1,1h-2v7c0,.553-.448,1-1,1s-1-.447-1-1v-7h-2c-.552,0-1-.447-1-1s.448-1,1-1h6c.552,0,1,.447,1,1Zm7,7.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm-4,0c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/>
</svg>

);
