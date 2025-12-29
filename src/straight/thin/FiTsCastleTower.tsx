import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCastleTower = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 23v-23h-4v3h-1v-3h-4v3h-1v-3h-4v23h-3v1h20v-1zm-13-22h2v3h3v-3h2v3h3v-3h2v22h-12zm6 16c-.827 0-1.5.673-1.5 1.5v2.5h3v-2.5c0-.827-.673-1.5-1.5-1.5zm.5 3h-1v-1.5c0-.275.224-.5.5-.5s.5.225.5.5zm-.5-14c-.827 0-1.5.673-1.5 1.5v2.5h3v-2.5c0-.827-.673-1.5-1.5-1.5zm.5 3h-1v-1.5c0-.275.224-.5.5-.5s.5.225.5.5zm-.5 2.5c-.827 0-1.5.673-1.5 1.5v2.5h3v-2.5c0-.827-.673-1.5-1.5-1.5zm.5 3h-1v-1.5c0-.275.224-.5.5-.5s.5.225.5.5z"/></svg>
);
