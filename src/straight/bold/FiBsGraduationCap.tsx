import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGraduationCap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.12 1.627a3.9 3.9 0 0 0 -4.24 0l-9.88 6.373 5 3.225v8.794l.32.408c.207.263 2.153 2.573 6.68 2.573s6.473-2.31 6.68-2.573l.32-.408v-8.794l2-1.29v10.065h3v-12zm-2.614 2.521a.9.9 0 0 1 .988 0l5.971 3.852-5.971 3.851a.893.893 0 0 1 -.988 0l-5.971-3.851zm4.494 14.71a6.408 6.408 0 0 1 -4 1.142 6.421 6.421 0 0 1 -4-1.139v-5.7l1.88 1.213a3.9 3.9 0 0 0 4.24 0l1.88-1.214z"/></svg>
);
