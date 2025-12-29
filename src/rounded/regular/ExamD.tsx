import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExamD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 14.2h1.2v-1.2h1.6v1.2h1.2v1.6h-1.2v1.2h-1.6v-1.2h-1.2zm-1-.7v3c0 1.381-1.119 2.5-2.5 2.5h-2.5v-8h2.5c1.381 0 2.5 1.119 2.5 2.5zm-1.6 0c0-.496-.404-.9-.9-.9h-.9v4.8h.9c.496 0 .9-.404.9-.9zm11.6-5.914v16.414h-20v-21c0-1.654 1.346-3 3-3h9.414zm-7-.586h3.586l-3.586-3.586zm5 2h-7v-7h-8c-.551 0-1 .449-1 1v19h16z"/></svg>
);
