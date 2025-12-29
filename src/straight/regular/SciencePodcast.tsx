import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SciencePodcast = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7 12c0 2.757 2.243 5 5 5s5-2.243 5-5v-10h2v-2h-14v2h2zm5 3c-1.654 0-3-1.346-3-3v-4h6v4c0 1.654-1.346 3-3 3zm3-9h-6v-4h6zm7 6v.529c0 5.063-3.997 9.199-9 9.447v2.024h-2v-2.024c-5.003-.248-9-4.384-9-9.447v-.529h2v.529c0 4.119 3.352 7.471 7.471 7.471h1.059c4.119 0 7.471-3.352 7.471-7.471v-.529h2z"/></svg>
);
