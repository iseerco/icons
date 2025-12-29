import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeTwentyFour = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 18a3 3 0 0 0 -6 0h2a1 1 0 0 1 2 0c0 .5-.85 1.138-1.6 1.7-1.125.844-2.4 1.8-2.4 3.3v1h6v-2h-3.29c.271-.236.589-.474.89-.7 1.125-.844 2.4-1.8 2.4-3.3z"/><path d="m22 19h-2v-4h-2v4a2 2 0 0 0 2 2h2v3h2v-9h-2z"/><path d="m13 6h-2v5h-4v2h6z"/><path d="m22 2v3.374a11.995 11.995 0 1 0 -13 18.231v-2.066a10 10 0 1 1 11.636-14.539h-3.636v2h5a2 2 0 0 0 2-2v-5z"/></svg>
);
