import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGameConsoleCrankHandheld = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 4v7h-1v-5.5c0-1.93-1.57-3.5-3.5-3.5h-12c-1.93 0-3.5 1.57-3.5 3.5v16.5h19v-8h4v-7h1v-3zm-4 15h-13v-13.5c0-.276.224-.5.5-.5h12c.276 0 .5.224.5.5zm-8-5h1v2h-1v1h-2v-1h-1v-2h1v-1h2zm6 .5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm-9-7.5h9v4h-9z"/></svg>
);
