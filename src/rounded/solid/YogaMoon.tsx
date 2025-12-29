import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const YogaMoon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,11.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5ZM17,1c-.552,0-1,.448-1,1v6h-6.97c-1.71,.203-3.247,1.171-4.03,2.764L.105,20.553c-.247,.494-.047,1.095,.447,1.342,.484,.244,1.094,.052,1.342-.447L6.118,13h1.709l4.279,8.447c.248,.499,.858,.691,1.342,.447,.494-.247,.694-.848,.447-1.342l-3.776-7.553h5.882v8c0,.553,.448,1,1,1s1-.447,1-1V2c0-.552-.448-1-1-1Z"/>
</svg>

);
