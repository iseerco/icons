import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 0h-18a3 3 0 0 0 -3 3v21h24v-21a3 3 0 0 0 -3-3zm-14 18a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm0-10a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm5 5a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm5 5a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm0-10a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/></svg>
);
