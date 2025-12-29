import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Database = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 3a3 3 0 0 0 -3-3h-18a3 3 0 0 0 -3 3v3a2.981 2.981 0 0 0 .78 2 2.981 2.981 0 0 0 -.78 2v3a2.981 2.981 0 0 0 .78 2 2.981 2.981 0 0 0 -.78 2v6h24v-6a2.981 2.981 0 0 0 -.78-2 2.981 2.981 0 0 0 .78-2v-3a2.981 2.981 0 0 0 -.78-2 2.981 2.981 0 0 0 .78-2zm-22 0a1 1 0 0 1 1-1h2v2h2v-2h2v2h2v-2h10a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1-1zm20 7v3a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1-1v-3a1 1 0 0 1 1-1h2v2h2v-2h2v2h2v-2h10a1 1 0 0 1 1 1zm0 11h-20v-4a1 1 0 0 1 1-1h2v2h2v-2h2v2h2v-2h10a1 1 0 0 1 1 1z"/></svg>
);
