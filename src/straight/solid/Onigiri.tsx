import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Onigiri = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.948 16h7.999v7h-7.999zm15.2-.805-6.999-11.761c-.922-1.547-2.45-2.434-4.193-2.434-1.757 0-3.293.887-4.213 2.434l-7 11.762c-.946 1.59-.991 3.518-.121 5.155.883 1.658 2.502 2.648 4.331 2.648h.996v-8.999h11.999v9h.991c1.785 0 3.701-1.249 4.555-2.97.774-1.56.661-3.141-.346-4.835z"/></svg>
);
