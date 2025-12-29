import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAngleDoubleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.733,23.888l-.707-.707,10.827-10.827c.094-.095.146-.22.146-.354s-.052-.259-.146-.354L11.026.819l.707-.707,10.827,10.827c.283.283.439.66.439,1.061s-.156.777-.439,1.061l-10.827,10.827Zm2.037-11.417c.126-.126.195-.293.195-.471s-.069-.345-.195-.471L2.354.112l-.707.707,11.181,11.181L1.646,23.181l.707.707,11.417-11.417Z"/>
</svg>

);
