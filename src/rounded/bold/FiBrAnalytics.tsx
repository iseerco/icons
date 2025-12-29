import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAnalytics = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5.5 16.5v-1c0-.828.671-1.5 1.5-1.5s1.5.672 1.5 1.5v1c0 .828-.671 1.5-1.5 1.5s-1.5-.672-1.5-1.5zm6.5 1.5c.829 0 1.5-.672 1.5-1.5v-5c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5 1.5v5c0 .828.671 1.5 1.5 1.5zm5 0c.829 0 1.5-.672 1.5-1.5v-3c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5 1.5v3c0 .828.671 1.5 1.5 1.5zm7-11.5v11c0 3.032-2.467 5.5-5.5 5.5h-13c-3.033 0-5.5-2.468-5.5-5.5v-11c0-3.038 2.462-5.5 5.5-5.5h13c3.038 0 5.5 2.462 5.5 5.5zm-16-2c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm-5 0c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm18 3.5h-18v9.5c0 1.379 1.122 2.5 2.5 2.5h13c1.378 0 2.5-1.121 2.5-2.5z"/></svg>
);
