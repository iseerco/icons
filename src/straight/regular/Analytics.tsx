import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Analytics = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7 15h2v4h-2zm4-3h2v7h-2zm4 2h2v5h-2zm-12-8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm5.5 1.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm15.5-3v19h-24v-19c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3zm-22 0v4h20v-4c0-.552-.448-1-1-1h-18c-.552 0-1 .448-1 1zm20 17v-11h-20v11z"/></svg>
);
