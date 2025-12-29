import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.791 7.209a8 8 0 0 0 -15.791 1.791 7.912 7.912 0 0 0 .9 3.671 5.49 5.49 0 0 0 2.6 10.329h10.5a8 8 0 0 0 1.791-15.791zm-3.978 11.912a3 3 0 0 1 -4.242 0l-3.384-3.384 1.413-1.414 3.384 3.384a1.023 1.023 0 0 0 1.414 0l5.654-5.654 1.414 1.414z"/></svg>
);
