import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudDownload = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.79 7.209a8 8 0 0 0 -15.79 1.791 7.912 7.912 0 0 0 .9 3.671 5.49 5.49 0 0 0 2.6 10.329h10.5a8 8 0 0 0 1.79-15.791zm-1.043 13.067a2.472 2.472 0 0 1 -3.494 0l-3.2-3.2 1.414-1.414 2.533 2.538v-8.2h2v8.2l2.535-2.535 1.414 1.414z"/></svg>
);
