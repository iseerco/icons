import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSkyscraper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 9.276v-.776c0-2.481-2.019-4.5-4.5-4.5v-2.5c0-.829-.671-1.5-1.5-1.5s-1.5.671-1.5 1.5v2.5c-2.481 0-4.5 2.019-4.5 4.5v.776c-1.742.621-3 2.271-3 4.224v9c0 .829.671 1.5 1.5 1.5s1.5-.671 1.5-1.5v-9c0-.827.673-1.5 1.5-1.5h9c.827 0 1.5.673 1.5 1.5v9c0 .829.671 1.5 1.5 1.5s1.5-.671 1.5-1.5v-9c0-1.953-1.258-3.602-3-4.224zm-9-.276v-.5c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v.5zm2 12.5v1c0 .829-.671 1.5-1.5 1.5s-1.5-.671-1.5-1.5v-1c0-.829.671-1.5 1.5-1.5s1.5.671 1.5 1.5zm0-6v1c0 .829-.671 1.5-1.5 1.5s-1.5-.671-1.5-1.5v-1c0-.829.671-1.5 1.5-1.5s1.5.671 1.5 1.5zm5 6v1c0 .829-.671 1.5-1.5 1.5s-1.5-.671-1.5-1.5v-1c0-.829.671-1.5 1.5-1.5s1.5.671 1.5 1.5zm0-6v1c0 .829-.671 1.5-1.5 1.5s-1.5-.671-1.5-1.5v-1c0-.829.671-1.5 1.5-1.5s1.5.671 1.5 1.5z"/></svg>
);
