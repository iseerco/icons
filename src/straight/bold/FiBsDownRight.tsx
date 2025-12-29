import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDownRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.05,23l5.35-5.49L.7,7.82,7.82,.7l9.69,9.69,5.49-5.33v14.53c0,.91-.36,1.76-1,2.41-.64,.64-1.5,1-2.41,1H5.05Zm-.1-15.17l9.66,9.66-2.45,2.51h7.43c.14,0,.23-.07,.29-.12,.05-.05,.12-.15,.12-.28v-7.43s-2.51,2.44-2.51,2.44L7.82,4.94l-2.88,2.88Z"/></svg>

);
