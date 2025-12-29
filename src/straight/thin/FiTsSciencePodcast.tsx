import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSciencePodcast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7 12c0 2.757 2.243 5 5 5s5-2.243 5-5v-11h2v-1h-14v1h2zm5 4c-2.206 0-4-1.794-4-4v-5h8v5c0 2.206-1.794 4-4 4zm4-10h-8v-5h8zm6 6v.559c0 5.206-4.235 9.441-9.441 9.441h-.059v2h-1v-2h-.059c-5.206 0-9.441-4.235-9.441-9.441v-.559h1v.559c0 4.654 3.787 8.441 8.441 8.441h1.117c4.655 0 8.441-3.787 8.441-8.441v-.559h1z"/></svg>
);
