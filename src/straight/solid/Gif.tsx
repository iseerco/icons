import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Gif = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 19h4.414l-4.414 4.414zm5-16v14h-7v7h-17v-21a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3zm-18.5 6v-2.068a.742.742 0 0 1 .749-.751.772.772 0 0 1 .75.75h1.251a2.013 2.013 0 0 0 -2-2 1.991 1.991 0 0 0 -2 1.985v2.1a1.991 1.991 0 0 0 2 1.984 2 2 0 0 0 2-1.984v-1.085h-2v1h.75v.084a.759.759 0 0 1 -.75.735.742.742 0 0 1 -.75-.75zm5.75-4.069h-1.25v6.069h1.25zm5.013 0h-3.263v6.025h1.25v-2.387h1.864v-1.25h-1.864v-1.138h2.013z"/></svg>
);
