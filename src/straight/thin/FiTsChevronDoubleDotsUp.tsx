import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChevronDoubleDotsUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13 15c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-1-5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0 8c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0 4c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm-1.12-16.543-7.72 7.177.681.732 7.734-7.19c.233-.235.617-.235.865.013l7.72 7.177.682-.732-7.708-7.165c-.625-.625-1.641-.625-2.252-.013zm2.253-4.988c-.624-.625-1.641-.625-2.256-.01l-10.221 9.678.688.727 10.23-9.688c.234-.235.616-.235.861.01l10.221 9.677.688-.727z"/></svg>
);
