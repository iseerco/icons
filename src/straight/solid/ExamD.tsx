import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExamD = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.414 5h-4.414v-4.414zm-11.914 7.6h-.9v4.8h.9c.496 0 .9-.404.9-.9v-3c0-.496-.404-.9-.9-.9zm5.5-5.6v-7h-10c-1.657 0-3 1.343-3 3v21h20v-17zm-3 9.5c0 1.381-1.119 2.5-2.5 2.5h-2.5v-8h2.5c1.381 0 2.5 1.119 2.5 2.5zm6-.7h-1.2v1.2h-1.6v-1.2h-1.2v-1.6h1.2v-1.2h1.6v1.2h1.2z"/></svg>
);
