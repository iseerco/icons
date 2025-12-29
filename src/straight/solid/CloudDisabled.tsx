import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudDisabled = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.855 20.441 2.1 2.1-1.414 1.414-22.498-22.498 1.414-1.414 3.1 3.1a7.989 7.989 0 0 1 13.233 4.066 7.986 7.986 0 0 1 4.065 13.232zm-19.855-11.441a7.912 7.912 0 0 0 .9 3.671 5.49 5.49 0 0 0 2.6 10.329h10.5a8 8 0 0 0 2.385-.372l-16.013-16.014a8 8 0 0 0 -.372 2.386z"/></svg>
);
