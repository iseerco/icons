import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsChevronDoubleDotsRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.204 14.024-5.74 6.119-2.188-2.053 5.741-6.121-5.753-6.085 2.191-2.048 5.752 6.155c1.06 1.13 1.059 2.902-.004 4.032zm7.063-3.833-9.176-9.721-2.182 2.06 8.94 9.47-8.94 9.471 2.182 2.059 9.146-9.688c.491-.491.763-1.146.763-1.841s-.271-1.349-.732-1.809zm-13.768 3.309c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm-4-3c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-4 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z"/></svg>
);
