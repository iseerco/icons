import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 15a8.009 8.009 0 0 1 -8 8h-.237l2.415-2.415a5.992 5.992 0 0 0 -1.378-11.525l-.758-.1-.1-.758a6 6 0 0 0 -11.942.798 5.945 5.945 0 0 0 1.182 3.563l.884 1.192-1.438.371a3.491 3.491 0 0 0 .872 6.874h.121l2 2h-2.121a5.49 5.49 0 0 1 -2.6-10.329 7.912 7.912 0 0 1 -.9-3.671 8 8 0 0 1 15.791-1.791 8.022 8.022 0 0 1 6.209 7.791zm-10.187 7.121 5.654-5.654-1.414-1.414-5.653 5.654a1.023 1.023 0 0 1 -1.414 0l-3.386-3.384-1.413 1.414 3.384 3.384a3 3 0 0 0 4.242 0z"/></svg>
);
