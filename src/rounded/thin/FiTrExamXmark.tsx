import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrExamXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.5 0h-15c-1.379 0-2.5 1.122-2.5 2.5v21.5h20v-21.5c0-1.378-1.121-2.5-2.5-2.5zm1.5 23h-18v-20.5c0-.827.673-1.5 1.5-1.5h15c.827 0 1.5.673 1.5 1.5zm-2.646-8.146-2.389 2.389 2.389 2.389-.707.707-2.389-2.389-2.389 2.389-.707-.707 2.389-2.389-2.389-2.389.707-.707 2.389 2.389 2.389-2.389zm-.354-4.854h-12v-1h12zm0-4h-12v-1h12zm-12 7h5.384l-1 1h-4.384z"/></svg>
);
