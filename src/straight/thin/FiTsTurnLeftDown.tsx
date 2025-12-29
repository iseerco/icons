import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTurnLeftDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m9,2.5v20.25l6.647-6.604.705.709-6.721,6.677c-.301.302-.704.469-1.132.469s-.831-.167-1.133-.47L.647,16.854l.705-.709,6.647,6.604V2.5c0-1.378,1.122-2.5,2.5-2.5h11.5v1h-11.5c-.827,0-1.5.673-1.5,1.5Z"/>
</svg>

);
