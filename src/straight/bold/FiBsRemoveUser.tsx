import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsRemoveUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 13h-9v-3h9zm-10-7a6 6 0 1 0 -6 6 6.006 6.006 0 0 0 6-6zm-3 0a3 3 0 1 1 -3-3 3 3 0 0 1 3 3zm5 13a5.006 5.006 0 0 0 -5-5h-6a5.006 5.006 0 0 0 -5 5v5h3v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5h3z"/></svg>
);
