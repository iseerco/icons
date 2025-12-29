import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMusicNote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m16.5,0c-1.379,0-2.5,1.121-2.5,2.5v12.842c-.996-1.415-2.642-2.342-4.5-2.342-3.032,0-5.5,2.468-5.5,5.5s2.468,5.5,5.5,5.5,5.5-2.468,5.5-5.5V2.5c0-.827.673-1.5,1.5-1.5h3.5V0h-3.5Zm-7,23c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5Z"/>
</svg>

);
