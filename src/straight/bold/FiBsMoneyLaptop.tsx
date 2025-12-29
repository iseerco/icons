import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMoneyLaptop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 19h2v2c0 1.657-1.343 3-3 3h-18c-1.657 0-3-1.343-3-3v-2h2v-13h4v3h-1v10h3.308l.923 1h5.538l.923-1h3.308v-7h3zm2-19v10h-16v-10zm-11.5 7c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm0-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm6 2c0-1.383-1.117-2.5-2.5-2.5s-2.5 1.117-2.5 2.5 1.117 2.5 2.5 2.5 2.5-1.117 2.5-2.5zm4 2c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm0-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z"/></svg>
);
