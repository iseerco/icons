import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeQuarterPast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 12a1 1 0 0 1 -2 0 10.011 10.011 0 0 0 -10-10 1 1 0 0 1 0-2 12.013 12.013 0 0 1 12 12zm-8 1a1 1 0 0 0 0-2h-2.277a2 2 0 0 0 -.723-.723v-3.277a1 1 0 0 0 -2 0v3.277a1.994 1.994 0 1 0 2.723 2.723zm-14.173-6.216a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm.173 5.216a1 1 0 1 0 -1 1 1 1 0 0 0 1-1zm10 10a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm-7.779-18.793a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm3.558-2.366a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm-5.952 14.375a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm14.394-5.943a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm-2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0 -1-1zm-3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0 -1-1z"/></svg>
);
