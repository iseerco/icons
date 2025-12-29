import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Skateboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.835 2.165a7.389 7.389 0 0 0 -10.451 0l-9.219 9.219a7.39 7.39 0 1 0 10.451 10.451l9.219-9.219a7.389 7.389 0 0 0 0-10.451zm-9.128 14.542-3 3a1 1 0 0 1 -1.414-1.414l.793-.793-2.586-2.586-.793.793a1 1 0 0 1 -1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-.793.793 2.586 2.586.793-.793a1 1 0 0 1 1.414 1.414zm7-7-3 3a1 1 0 0 1 -1.414-1.414l.793-.793-2.586-2.586-.793.793a1 1 0 0 1 -1.414-1.414l3-3a1 1 0 1 1 1.414 1.414l-.793.793 2.586 2.586.793-.793a1 1 0 0 1 1.414 1.414z"/></svg>
);
