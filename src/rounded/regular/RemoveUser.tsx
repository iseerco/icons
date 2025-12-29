import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RemoveUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 24a1 1 0 0 1 -1-1 7 7 0 0 0 -14 0 1 1 0 0 1 -2 0 9 9 0 0 1 18 0 1 1 0 0 1 -1 1zm6-11h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-14-1a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6zm0-10a4 4 0 1 0 4 4 4 4 0 0 0 -4-4z"/></svg>
);
