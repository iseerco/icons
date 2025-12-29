import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Syringe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.707 5.293-5-5a1 1 0 0 0 -1.414 1.414l1.793 1.793-2.475 2.475a5 5 0 0 0 -5.487-.265l2.583 2.583a1 1 0 1 1 -1.414 1.414l-2.707-2.707-1.586 1.586 2.707 2.707a1 1 0 1 1 -1.414 1.414l-2.707-2.707-1.586 1.588 2.705 2.705a1 1 0 1 1 -1.414 1.414l-2.485-2.487a6.963 6.963 0 0 0 -.806 3.265v3.1l-2.707 2.708a1 1 0 1 0 1.414 1.414l2.707-2.707h3.1a6.954 6.954 0 0 0 4.949-2.05l5.072-5.072a4.993 4.993 0 0 0 .482-6.478l2.483-2.486 1.793 1.793a1 1 0 0 0 1.414-1.414z"/></svg>
);
