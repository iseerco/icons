import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TaskCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3 22h7v2h-7c-1.654 0-3-1.346-3-3v-19h5.171c.413-1.164 1.525-2 2.829-2h2c1.304 0 2.416.836 2.829 2h5.171v8h-2v-6h-5v-1c0-.551-.449-1-1-1h-2c-.551 0-1 .449-1 1v1h-5v17c0 .551.449 1 1 1zm21-6v8h-12v-8c0-1.103.897-2 2-2v-2h2v2h4v-2h2v2c1.103 0 2 .897 2 2zm-2 6v-4h-8.001v4zm-16-14h-2v2h2zm0 4h-2v2h2zm-2 6h2v-2h-2zm4-8h6v-2h-6zm0 4h3v-2h-3z"/></svg>
);
