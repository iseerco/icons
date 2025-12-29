import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SessionTimeout = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 0c-6.075 0-11 4.925-11 11 0 5.379 3.863 9.849 8.965 10.804l6.886-11.804h2.298l3.023 5.182c.531-1.29.828-2.701.828-4.182 0-6.075-4.925-11-11-11zm1 12h-6v-2h4v-5h2zm5 0-7 12h14zm1 11h-2v-2h2zm-2-3v-4h2v4z"/></svg>
);
