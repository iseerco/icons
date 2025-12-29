import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Scale = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 2h-4.54a5.973 5.973 0 0 0 -8.92 0h-4.54a3 3 0 0 0 -3 3v19h24v-19a3 3 0 0 0 -3-3zm-9 0a4 4 0 0 1 4 4v1h-3.382l1.282-2.553-1.79-.894-1.728 3.447h-2.382v-1a4 4 0 0 1 4-4zm10 20h-20v-17a1 1 0 0 1 1-1h3.35a5.976 5.976 0 0 0 -.35 2v3h12v-3a5.976 5.976 0 0 0 -.35-2h3.35a1 1 0 0 1 1 1z"/></svg>
);
