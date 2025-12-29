import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Segway = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.664 14.027c-.983.16-1.664 1.083-1.664 2.08v1.893s-4 0-4 0c0-1.105-.895-2-2-2h-1v-8.5l3.137-5.5h2.863c.552 0 1-.448 1-1 0-.552-.448-1-1-1h-14c-.552 0-1 .448-1 1 0 .552.448 1 1 1h2.863l3.137 5.5v8.5h-1c-1.105 0-2 .895-2 2s-4 0-4 0v-1.893c0-.996-.681-1.92-1.664-2.08-1.253-.203-2.336.758-2.336 1.973v5.893c0 .996.681 1.92 1.664 2.08 1.253.204 2.336-.758 2.336-1.973v-2h16v1.893c0 .996.681 1.92 1.664 2.08 1.253.204 2.336-.758 2.336-1.973v-6c0-1.215-1.083-2.176-2.336-1.973z"/></svg>
);
