import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrChevronDoubleDotsDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 9c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm1 5c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm0-8c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm0-4c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm10.854 11.889c-.195-.195-.512-.195-.707 0l-8.379 8.379c-.944.945-2.591.945-3.535 0l-8.379-8.379c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l8.379 8.379c1.302 1.358 3.647 1.358 4.949 0l8.379-8.379c.195-.195.195-.512 0-.707zm-12.482 4.433c.898.897 2.36.897 3.258 0l6.596-6.597c.195-.195.195-.512 0-.707s-.512-.195-.707 0l-6.596 6.597c-.508.508-1.336.508-1.844 0l-6.596-6.597c-.195-.195-.512-.195-.707 0s-.195.512 0 .707z"/></svg>
);
