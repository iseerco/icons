import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BaseballPlayer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10.5 3.5c0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5zm-5.5 3.5c0-1.105-.895-2-2-2s-2 .895-2 2 .895 2 2 2 2-.895 2-2zm19 2.241v1.759h-6.686l-2.692-1.035-2.11 5.948 3.488 2.583v5.504h-2v-4.496l-4.986-3.692-3.005 8.188h-2.131l5.54-15.095v-.004c.265-.718.794-1.287 1.49-1.603.696-.317 1.473-.339 2.186-.064l4.591 1.766h3.893l-4.452-8.015 1.748-.97 5.126 9.227z"/></svg>
);
