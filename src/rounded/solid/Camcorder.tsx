import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Camcorder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,10.743v8.515c0,.761-.422,1.446-1.103,1.788-.286,.144-.593,.214-.899,.214-.421,0-.839-.135-1.193-.398l-.805-.6V9.739l.805-.6c.61-.455,1.412-.526,2.092-.184,.681,.341,1.103,1.026,1.103,1.788ZM5,19H13V11H5v8Zm13-8v8c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V11c0-2.757,2.243-5,5-5h6.086l-2.707-2.707c-.187-.186-.444-.293-.707-.293H1c-.552,0-1-.448-1-1S.448,1,1,1H7.672c.801,0,1.555,.312,2.121,.879l4.215,4.227c2.269,.473,3.992,2.487,3.992,4.894Zm-3-1c0-.552-.447-1-1-1H4c-.553,0-1,.448-1,1v10c0,.552,.447,1,1,1H14c.553,0,1-.448,1-1V10Z"/></svg>

);
