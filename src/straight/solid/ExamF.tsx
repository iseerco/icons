import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExamF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 7v-7h-10c-1.657 0-3 1.343-3 3v21h20v-17zm-4.5 5.6h-1.9v1.801h1.9v1.6h-1.9v3h-1.6v-8.001h3.5zm6.5 3.4h-4v-1.6h4zm4.414-11h-4.414v-4.414z"/></svg>
);
