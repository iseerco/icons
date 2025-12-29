import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareEnvelope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 10.242v5.758h-10v-5.758l2.878 2.878c.566.567 1.32.879 2.122.879s1.555-.312 2.121-.879l2.879-2.879zm-5.707 1.465c.378.378 1.037.377 1.414 0l3.638-3.638c-.108-.04-.222-.07-.344-.07h-8.001c-.122 0-.236.029-.344.07l3.637 3.637zm12.707-8.707v21h-24v-21c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3zm-5 6c0-1.654-1.346-3-3-3h-8c-1.654 0-3 1.346-3 3v9h14z"/></svg>
);
