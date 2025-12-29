import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Money = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 4h-18a3 3 0 0 0 -3 3v13h24v-13a3 3 0 0 0 -3-3zm1 14h-20v-11a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-10-10a4 4 0 1 0 4 4 4 4 0 0 0 -4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1 -2 2zm-6-5a1 1 0 1 1 -1-1 1 1 0 0 1 1 1zm14 0a1 1 0 1 1 -1-1 1 1 0 0 1 1 1zm-14 6a1 1 0 1 1 -1-1 1 1 0 0 1 1 1zm14 0a1 1 0 1 1 -1-1 1 1 0 0 1 1 1z"/></svg>
);
