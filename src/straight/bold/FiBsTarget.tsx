import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTarget = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm1.5 20.865v-2.865h-3v2.865a9.014 9.014 0 0 1 -7.365-7.365h2.865v-3h-2.865a9.014 9.014 0 0 1 7.365-7.365v2.865h3v-2.865a9.01 9.01 0 0 1 7.365 7.365h-2.865v3h2.865a9.01 9.01 0 0 1 -7.365 7.365zm0-10.365h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3z"/></svg>
);
