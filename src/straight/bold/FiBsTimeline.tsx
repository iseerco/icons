import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTimeline = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 13.5v3.85c1.179.563 2 1.756 2 3.15 0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5c0-1.394.821-2.587 2-3.15v-3.85h-10.5v-3h4v-3.85c-1.179-.563-2-1.756-2-3.15 0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 1.394-.821 2.587-2 3.15v3.85h10v-3.85c-1.179-.563-2-1.756-2-3.15 0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5c0 1.394-.821 2.587-2 3.15v3.85h4v3z"/></svg>
);
