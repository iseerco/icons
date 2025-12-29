import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMusicAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.734.807a3.494 3.494 0 0 0 -2.879-.746l-12 2.25a3.5 3.5 0 0 0 -2.855 3.44v10.39a3.977 3.977 0 0 0 -1-.141 4 4 0 1 0 4 4v-9.2l13-2.435v4.776a3.992 3.992 0 1 0 3 3.859v-13.5a3.488 3.488 0 0 0 -1.266-2.693zm-14.734 6.943v-2a.5.5 0 0 1 .408-.491l12-2.25a.5.5 0 0 1 .592.491v1.812z"/></svg>
);
