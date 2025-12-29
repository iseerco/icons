import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsConveyorBeltEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,15H4.5c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5Zm-4.243,3c-.166.469-.257.974-.257,1.5s.091,1.031.257,1.5h-6.515c.166-.469.257-.974.257-1.5s-.091-1.031-.257-1.5h6.515Zm-12.257,1.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5-.673,1.5-1.5,1.5-1.5-.673-1.5-1.5Zm16.5,1.5c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"/>
</svg>

);
