import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WebsiteStructure = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 20h1v4h-4v-4h1v-1.5h-6v1.5h1v4h-4v-4h1v-2c0-.827.673-1.5 1.5-1.5h2.5v-1.5h-1v-4h4v4h-1v1.5h2.5c.827 0 1.5.673 1.5 1.5zm-12.5-17c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm4 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm15.5 0v19h-4v-2h2v-11h-20v11h2v2h-4v-19c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3zm-2 4v-4c0-.551-.448-1-1-1h-18c-.552 0-1 .449-1 1v4z"/></svg>
);
