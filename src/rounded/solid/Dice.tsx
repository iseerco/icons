import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 0h-14a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-14a5.006 5.006 0 0 0 -5-5zm-12 18a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm0-10a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm5 5a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm5 5a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm0-10a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/></svg>
);
