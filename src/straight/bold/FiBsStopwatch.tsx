import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsStopwatch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 11.69a2 2 0 1 1 -3 0v-4.69h3zm6.9-5.779a11 11 0 1 1 -16.8 0l-.66-.732-.756.757-2.12-2.122 3.75-3.75 2.122 2.122-.869.868.762.846a10.927 10.927 0 0 1 4.671-1.785v-2.115h3v2.115a10.927 10.927 0 0 1 4.671 1.785l.762-.846-.869-.868 2.122-2.122 3.75 3.75-2.122 2.122-.756-.757zm-.4 7.089a8 8 0 1 0 -8 8 8.009 8.009 0 0 0 8-8z"/></svg>
);
