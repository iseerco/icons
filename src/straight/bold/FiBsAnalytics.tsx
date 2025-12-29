import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAnalytics = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8.5 18h-3v-4h3zm5-8h-3v8h3zm5 2h-3v6h3zm5.5-7.5v18.5h-24v-18.5c0-1.93 1.57-3.5 3.5-3.5h17c1.93 0 3.5 1.57 3.5 3.5zm-16 0c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm-5 0c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm18 3.5h-18v12h18z"/></svg>
);
