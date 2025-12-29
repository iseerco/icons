import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const VanFront = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 9v1c0 1.105-.895 2-2 2h-20c-1.105 0-2-.895-2-2v-1h2.286l.52-5.458c.121-1.267 1.023-2.324 2.259-2.629 2.15-.531 4.637-.913 6.935-.913s4.786.383 6.935.913c1.236.305 2.139 1.362 2.259 2.629l.52 5.457h2.286zm-22 5h20v10h-5v-2h-10v2h-5zm15 3.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm-13 0c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5z"/></svg>
);
