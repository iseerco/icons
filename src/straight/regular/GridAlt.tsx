import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GridAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 0h-18a3 3 0 0 0 -3 3v21h24v-21a3 3 0 0 0 -3-3zm1 3v3h-4v-4h3a1 1 0 0 1 1 1zm-9 3v-4h3v4zm3 2v3h-3v-3zm-5-2h-3v-4h3zm0 2v3h-3v-3zm-5 3h-4v-3h4zm0 2v3h-4v-3zm2 0h3v3h-3zm3 5v4h-3v-4zm2 0h3v4h-3zm0-2v-3h3v3zm5-3h4v3h-4zm0-2v-3h4v3zm-15-9h3v4h-4v-3a1 1 0 0 1 1-1zm-1 16h4v4h-4zm16 4v-4h4v4z"/></svg>
);
