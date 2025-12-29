import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHastag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.317,9h5.33L24,6H18.677L19.4,0H16.379l-.72,6H9.783l.72-6H7.485L6.764,6H.353L0,9H6.4l-.721,6H.353L0,18H5.323L4.6,24H7.621l.72-6h5.876l-.72,6h3.018l.721-6h6.411L24,15H17.6ZM8.7,15l.72-6H15.3l-.72,6Z"/></svg>

);
