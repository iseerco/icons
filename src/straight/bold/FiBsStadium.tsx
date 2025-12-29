import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStadium = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 4 3-2-3-2h-2v7h-6v-3l3-2-3-2h-2v7h-6v-3l3-2-3-2h-2v7h-3v3.716l2.5 8.5v4.784h19v-4.784l2.5-8.5v-3.716h-3zm-10.954 9-.333-3h4.574l-.333 3h-3.907zm-7.046-3h3.695l.333 3h-3.229l-.799-2.716zm15.5 11h-4.5v-1c0-1.105-.895-2-2-2s-2 .895-2 2v1h-4.5v-2.216l-.819-2.784h14.638l-.819 2.784zm2.5-10.716-.799 2.716h-3.229l.333-3h3.695z"/></svg>
);
