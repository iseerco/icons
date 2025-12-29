import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TimeTwentyFour = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 3v3a3 3 0 0 1 -3 3h-3v-2h2.636a9.991 9.991 0 1 0 -11.636 14.539v2.066a11.993 11.993 0 1 1 13-18.231v-2.374zm-7 15a3 3 0 0 0 -6 0h2a1 1 0 0 1 2 0c0 .5-.85 1.138-1.6 1.7-1.125.844-2.4 1.8-2.4 3.3v1h6v-2h-3.29c.271-.236.589-.474.89-.7 1.125-.844 2.4-1.8 2.4-3.3zm5 1h-2v-4h-2v4a2 2 0 0 0 2 2h2v3h2v-9h-2zm-9-13h-2v5h-4v2h6z"/></svg>
);
