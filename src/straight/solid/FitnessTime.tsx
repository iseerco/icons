import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FitnessTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 20h-1v2h-2v-6h2v2h1zm-17-2h-1v2h1v2h2v-6h-2zm11 0h-6v-4h-2v10h2v-4h6v4h2v-10h-2zm2-8c0 .685-.07 1.354-.201 2h-3.799v4h-2v-4h-6v2h-3v2h-1v1.986c-2.425-1.824-4-4.718-4-7.986 0-5.523 4.477-10 10-10s10 4.477 10 10zm-9-6h-2v5h-4v2h6z"/></svg>
);
