import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Phone24h = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5.014c-3.034 0-5.5 2.467-5.5 5.5v5.5h5.5c3.033 0 5.5-2.467 5.5-5.5s-2.467-5.5-5.5-5.5zm-.5 6.986v1h-3v-.5c0-1 .666-1.499 1.2-1.9.511-.383.8-.624.8-1.1 0-.276-.224-.5-.5-.5s-.5.224-.5.5h-1c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5c0 1-.666 1.499-1.2 1.9-.298.224-.521.398-.654.6zm4 1h-1v-1h-1c-.551 0-1-.449-1-1v-3h1v3h1v-3h1zm1.878 10.992-3.171 3.171c-1.104 1.106-2.599 1.715-4.207 1.715-7.248 0-16.5-9.252-16.5-16.499 0-1.609.609-3.104 1.717-4.208l3.17-3.171 6.265 6.266-4.125 4.125c1.373 3.062 3.493 5.187 6.453 6.469l4.133-4.133z"/></svg>
);
