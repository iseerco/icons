import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ExamXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 0h-14c-1.654 0-3 1.346-3 3v21h20v-21c0-1.654-1.346-3-3-3zm1 22h-16v-19c0-.551.448-1 1-1h14c.552 0 1 .449 1 1zm-1.88-6.694-1.693 1.693 1.693 1.693-1.414 1.414-1.693-1.693-1.693 1.693-1.414-1.414 1.693-1.693-1.693-1.693 1.414-1.414 1.693 1.693 1.693-1.693zm-1.12-4.306h-10v-2h10zm0-4h-10v-2h10zm-10 6h4.384l-2 2h-2.384z"/></svg>
);
