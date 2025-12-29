import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsInsertSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.768,6.732l4.783,4.697-2.102,2.141-2.949-2.896v13.326h-3v-13.326l-2.949,2.896-2.102-2.141,4.793-4.707c.965-.965,2.551-.965,3.525.01ZM20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h3V3.5c0-.276.224-.5.5-.5h17c.275,0,.5.224.5.5v20.5h3V3.5c0-1.93-1.57-3.5-3.5-3.5Z"/>
</svg>

);
