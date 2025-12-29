import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 0h-13a5.506 5.506 0 0 0 -5.5 5.5v13a5.506 5.506 0 0 0 5.5 5.5h13a5.506 5.506 0 0 0 5.5-5.5v-13a5.506 5.506 0 0 0 -5.5-5.5zm2.5 18.5a2.5 2.5 0 0 1 -2.5 2.5h-13a2.5 2.5 0 0 1 -2.5-2.5v-13a2.5 2.5 0 0 1 2.5-2.5h13a2.5 2.5 0 0 1 2.5 2.5zm-2-10a1.5 1.5 0 0 1 -3 0 .5.5 0 0 0 -.5-.5h-2v8a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1 0-3v-8h-2a.5.5 0 0 0 -.5.5 1.5 1.5 0 0 1 -3 0 3.5 3.5 0 0 1 3.5-3.5h7a3.5 3.5 0 0 1 3.5 3.5z"/></svg>
);
