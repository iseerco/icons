import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTorchInspirationLeader = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4,6c0-2.209,1.791-4,4-4s4,1.791,4,4-1.791,4-4,4-4-1.791-4-4Zm14.264,4.728l-2.61,1.272H6c-2.206,0-4,1.794-4,4v8h3v-8c0-.551.448-1,1-1h4v9h3v-9h3.346l4.104-2h.051l.728-7h-3.455l.491,4.728Zm1.236-10.728c-1.082,1.159.041,3-1.192,3-.582,0-.441-1.588-.441-1.588-.452.466-1.089,1.071-1.089,1.855,0,.662.246,1.261.639,1.733h4.166c.393-.472.639-1.071.639-1.733,0-1.576-1.863-2.407-2.722-3.267Z"/>
</svg>

);
