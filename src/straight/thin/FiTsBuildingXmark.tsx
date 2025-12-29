import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBuildingXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 14.77-4.277 4.247 4.247 4.247-.707.737-4.247-4.277-4.247 4.277-.707-.737 4.247-4.247-4.247-4.247.707-.707 4.247 4.247 4.247-4.247.738.707zm-10.5-13.77h-11c-.827 0-1.5.673-1.5 1.5v20.5h9.971l1 1h-11.971v-21.5c0-1.379 1.122-2.5 2.5-2.5h11c1.378 0 2.5 1.121 2.5 2.5v9.965l-1-1v-8.965c0-.827-.673-1.5-1.5-1.5zm-6.5 13h-3v-1h3zm2-1h3v1h-3zm-5 4h3v1h-3zm5 0h3v1h-3zm-2-11h-3v-1h3zm2-1h3v1h-3zm-2 5h-3v-1h3zm2-1h3v1h-3z"/></svg>
);
