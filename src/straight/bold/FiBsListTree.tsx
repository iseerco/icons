import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsListTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 10h6v3h-6zm0 11h6v-3h-6zm-8-19v3h14v-3zm-2 8h-3v-3h2v-7h-7v7h2v15h6v2h7v-7h-7v2h-3v-6h3v2h7v-7h-7z"/></svg>
);
