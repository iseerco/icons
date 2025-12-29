import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Referee = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 6c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6zm-2.287 8-3.713 3.183-3.713-3.183c-.422 0-.882.023-1.287.115v9.884h2v-6.754l2 1.714v5.04h2v-5.04l2-1.714v6.754h2v-9.883c-.405-.092-.865-.116-1.287-.115zm-12.713 5v5h2v-8.964c-1.206.916-2 2.352-2 3.964zm16-3.964v8.964h2v-5c0-1.612-.794-3.047-2-3.964z"/></svg>
);
