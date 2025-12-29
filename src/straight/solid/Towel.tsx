import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Towel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 9h5v10h-15v-4h10zm-2 4v-10.5c0-.925.282-1.784.762-2.5h-10.762c-1.654 0-3 1.346-3 3v2h-2v2h2v6zm-8 11h15v-3h-15zm15-19v-2.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v4.5h7v-2z"/></svg>
);
