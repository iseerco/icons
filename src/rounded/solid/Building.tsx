import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Building = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9 0h-4a5 5 0 0 0 -5 5v14a5 5 0 0 0 5 5h9v-19a5 5 0 0 0 -5-5zm-4 19h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm5 12h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm0-4h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm9-2h-3v19h3a5.006 5.006 0 0 0 5-5v-9a5.006 5.006 0 0 0 -5-5zm1 14a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm0-4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm0-4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/></svg>
);
