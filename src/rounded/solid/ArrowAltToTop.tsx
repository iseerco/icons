import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ArrowAltToTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H4c-.552,0-1,.448-1,1s.448,1,1,1h7.652c-.074,.037-.143,.086-.204,.148L7.087,6.65c-.492,.498-.143,1.35,.552,1.35h3.361v15c0,.552,.448,1,1,1s1-.448,1-1V8h3.361c.695,0,1.044-.852,.552-1.35L12.552,2.148c-.061-.062-.13-.111-.204-.148h7.652c.553,0,1-.448,1-1s-.447-1-1-1Z"/></svg>

);
