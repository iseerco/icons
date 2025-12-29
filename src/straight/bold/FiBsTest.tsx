import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 16h3v3h-3zm-1-2v-1h-2v1h-3v-2.134a8.95 8.95 0 0 1 .8-3.706l.676-1.492a2.71 2.71 0 0 1 2.524-1.668 2.737 2.737 0 0 1 2.553 1.729l.648 1.43a8.944 8.944 0 0 1 .8 3.707v2.134zm-4 2.894-.68-.694-2.141 2.1.877.894a2.747 2.747 0 0 0 3.893 0l1.866-1.883-2.13-2.112zm13-10.152v17.258h-20v-20.5a3.5 3.5 0 0 1 3.5-3.5h9.758a4.527 4.527 0 0 1 3.181 1.318l2.243 2.243a4.527 4.527 0 0 1 1.318 3.181zm-3 14.258v-14h-4v-4h-9.5a.5.5 0 0 0 -.5.5v17.5z"/></svg>
);
