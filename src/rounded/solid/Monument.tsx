import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Monument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,23c0,.552-.448,1-1,1H1c-.552,0-1-.448-1-1s.448-1,1-1H23c.552,0,1,.448,1,1ZM17.378,5c-.182-.996-.65-1.928-1.368-2.646l-1.183-1.182c-1.511-1.512-4.146-1.512-5.656,0l-1.183,1.182c-.718,.718-1.186,1.65-1.368,2.646h10.757Zm3.622,13h-2.065l-1.294-11h-4.64v10c0,.552-.448,1-1,1s-1-.448-1-1V7H6.36l-1.294,11H3c-.552,0-1,.448-1,1s.448,1,1,1H21c.552,0,1-.448,1-1s-.448-1-1-1Z"/></svg>

);
