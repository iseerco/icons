import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RemoveUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 12h-8v-2h8zm-9.026-6a6 6 0 1 0 -6 6 6.006 6.006 0 0 0 6-6zm-2 0a4 4 0 1 1 -4-4 4 4 0 0 1 4 4zm5.026 13a5.006 5.006 0 0 0 -5-5h-8a5.006 5.006 0 0 0 -5 5v5h2v-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5h2z"/></svg>
);
