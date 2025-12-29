import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CourtOrder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.166 12h-1v2h10v-2h-1v-10h1v-2h-10v2h1v4h-9v2h9zm2-7h4v4h-4zm0 7v-1h4v1zm4-10v1h-4v-1zm4 18c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v2h-1v2h14v-2h-1zm-10 0h8v2h-8zm11.283-5.041-.566-1.918 3.385-1 .566 1.918zm0 1.582 3.385 1-.566 1.918-3.385-1zm-17.951-2.582.566-1.918 3.385 1-.566 1.918zm3.951 4.5-3.385 1-.566-1.918 3.385-1z"/></svg>
);
