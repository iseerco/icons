import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrChevronDoubleDotsUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-1-5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0 8c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0 4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm10.854-12.596-8.379-8.379c-1.322-1.323-3.629-1.322-4.949 0l-8.38 8.379c-.195.195-.195.512 0 .707s.512.195.707 0l8.379-8.379c.944-.944 2.59-.945 3.535 0l8.379 8.378c.195.195.512.195.707 0s.195-.512 0-.707zm-9.225-3.725c-.898-.898-2.359-.898-3.258 0l-6.596 6.596c-.195.195-.195.512 0 .707s.512.195.707 0l6.596-6.596c.509-.508 1.335-.508 1.844 0l6.596 6.596c.195.195.512.195.707 0s.195-.512 0-.707z"/></svg>
);
