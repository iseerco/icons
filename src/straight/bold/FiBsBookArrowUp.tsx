import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBookArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,14v8h-3v-8h-2.5l3.293-3.293c.39-.39,1.024-.39,1.414,0l3.293,3.293h-2.5Zm2-11.5V10.672l-1.379-1.379c-.457-.457-1.027-.73-1.621-.83V3H10v13h6v3H5c-.552,0-1,.449-1,1s.448,1,1,1h11v3H5c-2.209,0-4-1.791-4-4V4C1,1.791,2.791,0,5,0h15.5c1.381,0,2.5,1.119,2.5,2.5ZM7,3h-2c-.552,0-1,.448-1,1v12.142c.322-.084,.653-.142,1-.142h2V3Z"/></svg>

);
