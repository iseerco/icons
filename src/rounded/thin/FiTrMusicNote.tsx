import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrMusicNote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20.5,0h-2.5c-2.206,0-4,1.794-4,4v11.342c-.996-1.415-2.642-2.342-4.5-2.342-3.032,0-5.5,2.468-5.5,5.5s2.468,5.5,5.5,5.5,5.5-2.468,5.5-5.5V4c0-1.654,1.346-3,3-3h2.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-11,23c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5,4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5Z"/>
</svg>

);
