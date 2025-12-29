import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Skateboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.835 2.165a7.389 7.389 0 0 0 -10.451 0l-9.219 9.219a7.39 7.39 0 1 0 10.451 10.451l9.219-9.219a7.389 7.389 0 0 0 0-10.451zm-1.414 9.035-9.221 9.221a5.39 5.39 0 1 1 -7.621-7.621l9.221-9.221a5.39 5.39 0 1 1 7.621 7.621zm-.714-2.909a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -1.414-1.414l.793-.793-2.586-2.584-.793.793a1 1 0 0 1 -1.414-1.414l3-3a1 1 0 1 1 1.414 1.414l-.793.793 2.586 2.586.793-.793a1 1 0 0 1 1.414 0zm-7 7a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -1.414-1.414l.793-.793-2.586-2.584-.793.793a1 1 0 0 1 -1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-.793.793 2.586 2.586.793-.793a1 1 0 0 1 1.414 0z"/></svg>
);
