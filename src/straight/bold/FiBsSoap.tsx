import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSoap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7 16h10v3h-10zm15 1v7h-20v-7a10 10 0 0 1 5-8.647v-3.353h2v-1.5a3.5 3.5 0 0 1 3.5-3.5h7.5v3h-5v2h2v3.353a10 10 0 0 1 5 8.647zm-3 0a7 7 0 0 0 -14 0v4h14z"/></svg>
);
