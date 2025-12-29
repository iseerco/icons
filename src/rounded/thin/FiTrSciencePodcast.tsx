import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSciencePodcast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5.5 1h1.5v11c0 2.757 2.243 5 5 5s5-2.243 5-5v-11h1.5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-13c-.276 0-.5.224-.5.5s.224.5.5.5zm6.5 15c-2.206 0-4-1.794-4-4v-5h8v5c0 2.206-1.794 4-4 4zm4-10h-8v-5h8zm6 6.559c.002 5.227-4.274 9.475-9.5 9.441v1.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-1.5c-5.226.034-9.502-4.215-9.5-9.441v-.559c0-.276.224-.5.5-.5s.5.224.5.5v.559c0 4.654 3.787 8.441 8.441 8.441h1.117c4.655 0 8.441-3.787 8.441-8.441 0-.276.224-.5.5-.5s.5.224.5.5z"/></svg>
);
