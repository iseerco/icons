import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DormRoom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m14,18h4v2h-5v-1c0-.551.448-1,1-1Zm-3,2h-5v-6h12v2h-4c-1.654,0-3,1.346-3,3v1Zm-1-2.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Zm-4,4.5v2h12v-2H6Zm11-12h-3c-.552,0-1,.449-1,1v1h5v-1c0-.551-.448-1-1-1Zm7,.074v13.926h-4v-13c0-1.654-1.346-3-3-3h-3c-1.654,0-3,1.346-3,3v1h-5v-4h-2v16H0v-13.926c0-.959.433-1.849,1.188-2.439L10.092.659c1.124-.881,2.691-.881,3.816,0l8.905,6.977c.754.592,1.187,1.48,1.187,2.439Zm-14-.574c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/>
</svg>

);
