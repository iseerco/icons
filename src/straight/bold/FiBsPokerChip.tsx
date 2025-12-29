import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPokerChip = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm8.617 9.415-2.871.861a6.007 6.007 0 0 0 -4.022-4.022l.861-2.871a9.027 9.027 0 0 1 6.032 6.032zm-8.617 6.403-2.864-3.818 2.864-3.818 2.864 3.818zm-2.585-12.435.861 2.871a6.007 6.007 0 0 0 -4.022 4.022l-2.871-.861a9.031 9.031 0 0 1 6.032-6.032zm-6.032 11.2 2.871-.861a6.009 6.009 0 0 0 4.022 4.022l-.861 2.871a9.031 9.031 0 0 1 -6.032-6.03zm11.2 6.032-.861-2.871a6.009 6.009 0 0 0 4.022-4.022l2.871.861a9.027 9.027 0 0 1 -6.03 6.034z"/></svg>
);
