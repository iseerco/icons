import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrLaptopSignal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 1.5v6c0 .828-.671 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-6c0-.828.671-1.5 1.5-1.5s1.5.672 1.5 1.5zm-5.5 7.5c.829 0 1.5-.672 1.5-1.5v-4c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5 1.5v4c0 .828.671 1.5 1.5 1.5zm-4 0c.829 0 1.5-.672 1.5-1.5v-2c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5 1.5v2c0 .828.671 1.5 1.5 1.5zm7.5 10v-6.5c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5 1.5v6.5h-3.308l-.923 1h-5.538l-.923-1h-3.308v-7.5c0-1.379 1.122-2.5 2.5-2.5h2c.829 0 1.5-.672 1.5-1.5s-.671-1.5-1.5-1.5h-2c-3.033 0-5.5 2.468-5.5 5.5v7.5c-1.105 0-2 .895-2 2v1.154c0 1.02.827 1.846 1.846 1.846h20.308c1.02 0 1.846-.827 1.846-1.846v-1.154c0-1.105-.895-2-2-2z"/></svg>
);
