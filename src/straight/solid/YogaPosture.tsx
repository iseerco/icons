import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const YogaPosture = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M14.998,15.5c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5Zm3.002-.937l-.018,8.439-2-.004,.026-12.998c0-2.038-1.489-3.28-3.509-3.5-.5,1-1.399,2.049-2.865,2.372-.37,.617-.575,1.313-.575,2.041l-.026,12.088-2-.004,.026-12.086c0-.785,.168-1.544,.459-2.256l-1.988-.844c-.322,.959-.497,2.03-.497,3.188v12H3.034V11C3.034,4.5,6.722,1,12,1c4.886,0,9,3.95,9,8,0,3.5-1.879,4.838-2.999,5.563Z"/>
</svg>

);
