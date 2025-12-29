import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MusicAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.916.691a2.992 2.992 0 0 0 -2.469-.638l-11.999 2.247a3 3 0 0 0 -2.448 2.951v11.305a3.959 3.959 0 0 0 -2-.556 4 4 0 1 0 4 4v-10.58l14-2.62v6.761a3.959 3.959 0 0 0 -2-.561 4 4 0 1 0 4 4v-14a3 3 0 0 0 -1.084-2.309z"/></svg>
);
