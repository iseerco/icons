import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrPresentationFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 1.5c0-.829-.671-1.5-1.5-1.5h-21c-.829 0-1.5.671-1.5 1.5 0 .652.419 1.202 1 1.408v9.592c0 3.033 2.467 5.5 5.5 5.5h4v1.511c-.604.456-1 1.173-1 1.989 0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-.815-.396-1.532-1-1.989v-1.511h4c3.033 0 5.5-2.467 5.5-5.5v-9.592c.581-.207 1-.756 1-1.408zm-6.5 13.5h-11c-1.378 0-2.5-1.122-2.5-2.5v-9.5h16v9.5c0 1.378-1.122 2.5-2.5 2.5zm-.5-7v3c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-4c0-1.105.895-2 2-2h1.421c.436 0 .861.135 1.216.388l.316.225c.355.252.78.388 1.216.388h1.83c1.105 0 2 .895 2 2z"/></svg>
);
