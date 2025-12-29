import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrNote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.5,0H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h11.646c1.42,0,2.756-.553,3.761-1.558l2.536-2.536c1.004-1.004,1.558-2.34,1.558-3.761V4.5c0-2.481-2.019-4.5-4.5-4.5ZM3,19.5V4.5c0-.827.673-1.5,1.5-1.5h15c.827,0,1.5.673,1.5,1.5v10.5h-3c-1.654,0-3,1.346-3,3v3H4.5c-.827,0-1.5-.673-1.5-1.5Zm2-13c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Zm3,5.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm0,5.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Z"/></svg>

);
