import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 13h2c.552 0 1-.447 1-1s-.448-1-1-1h-2v-5.5h2c.552 0 1-.447 1-1s-.448-1-1-1h-2.121c-.457-2-2.242-3.5-4.379-3.5h-3c-2.137 0-3.922 1.5-4.379 3.5h-2.121c-.552 0-1 .447-1 1s.448 1 1 1h2v5.5h-2c-.552 0-1 .447-1 1s.448 1 1 1h2v5.5h-2c-.552 0-1 .447-1 1s.448 1 1 1h2.121c.457 2 2.242 3.5 4.379 3.5h3c2.137 0 3.922-1.5 4.379-3.5h2.121c.552 0 1-.447 1-1s-.448-1-1-1h-2zm-10-4h8v6h-8zm2.5-7h3c1.378 0 2.5 1.121 2.5 2.5v2.5h-8v-2.5c0-1.379 1.122-2.5 2.5-2.5zm3 20h-3c-1.378 0-2.5-1.121-2.5-2.5v-2.5h8v2.5c0 1.379-1.122 2.5-2.5 2.5z"/></svg>
);
