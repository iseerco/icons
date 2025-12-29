import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExamF = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7 11h4v1.6h-2.4v1.801h2.4v1.6h-2.4v3h-1.6zm6 5h4v-1.6h-4zm9-8.414v16.414h-20v-21c0-1.654 1.346-3 3-3h9.414zm-7-.586h3.586l-3.586-3.586zm5 2h-7v-7h-8c-.551 0-1 .449-1 1v19h16z"/></svg>
);
