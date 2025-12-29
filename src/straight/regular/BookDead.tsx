import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookDead = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10,15h4v-2h2.389s.056-2.256.056-3.556c0-2.451-1.993-4.444-4.444-4.444s-4.444,1.994-4.444,4.444l-.056,3.556h2.5v2Zm3-6h2v2h-2v-2Zm-4,2v-2h2v2h-2ZM20,0H5c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3h17V2c0-1.103-.897-2-2-2ZM5,2h15v16H5c-.351,0-.687.061-1,.172V3c0-.551.448-1,1-1Zm0,20c-.552,0-1-.449-1-1s.448-1,1-1h15v2H5Z"/></svg>

);
