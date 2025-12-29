import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5 0h-3.306a3.477 3.477 0 0 0 -2.474 1.025l-7.008 7.008a7.9 7.9 0 0 0 -2.878.267 8 8 0 1 0 9.866 9.866 7.9 7.9 0 0 0 .264-2.931l1.036-1.163v-2.072h3v-3h1.96l1.015-.72a3.477 3.477 0 0 0 1.025-2.474v-3.306a2.5 2.5 0 0 0 -2.5-2.5zm-.5 5.806a.5.5 0 0 1 -.04.194h-3.96v3h-3v3.928l-1.321 1.359a4.945 4.945 0 0 1 .321 1.713 5 5 0 1 1 -5-5 4.947 4.947 0 0 1 1.678.31l8.163-8.164a.5.5 0 0 1 .353-.146h2.806zm-16 11.694a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5z"/></svg>
);
