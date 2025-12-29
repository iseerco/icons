import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsUpRightFromSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,1.5v9.5h-1V1.707l-14.646,14.646-.707-.707L22.293,1h-9.293V0h9.5c.827,0,1.5.673,1.5,1.5Zm-1,21.5H1V2.5c0-.827.673-1.5,1.5-1.5h7.5V0H2.5C1.121,0,0,1.122,0,2.5v21.5h24v-10h-1v9Z"/>
</svg>

);
