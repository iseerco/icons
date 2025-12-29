import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareUpRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,5.5v8.5h-1V5.707l-13.646,13.646-.707-.707,13.646-13.646h-8.293v-1h8.5c.827,0,1.5.673,1.5,1.5Zm4-3v21.5H0V2.5C0,1.122,1.121,0,2.5,0h19c1.379,0,2.5,1.122,2.5,2.5Zm-1,0c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v20.5h22V2.5Z"/>
</svg>

);
