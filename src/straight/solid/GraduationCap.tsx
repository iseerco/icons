import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GraduationCap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 8v12h-2v-10.71l-7.88 5.082a3.892 3.892 0 0 1 -4.24 0l-9.88-6.372 9.88-6.373a3.9 3.9 0 0 1 4.24 0zm-12 9a5.894 5.894 0 0 1 -3.2-.947l-4.8-3.093v7.454l.293.293c.094.093 2.354 2.293 7.707 2.293s7.613-2.2 7.707-2.293l.293-.293v-7.454l-4.8 3.093a5.894 5.894 0 0 1 -3.2.947z"/></svg>
);
