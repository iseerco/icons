import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Money = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 12a2 2 0 1 1 -2-2 2 2 0 0 1 2 2zm10-5v13h-24v-13a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3zm-19 9a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm0-8a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm11 4a4 4 0 1 0 -4 4 4 4 0 0 0 4-4zm5 4a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm0-8a1 1 0 1 0 -1 1 1 1 0 0 0 1-1z"/></svg>
);
