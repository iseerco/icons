import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGolf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 10a21.7 21.7 0 0 0 -3 .211v-3.189l5-2.522-6-4.366a1.383 1.383 0 0 0 -2 1.393v9.357c-3.639 1.175-6 3.416-6 6.116 0 3.991 5.159 7 12 7s12-3.009 12-7-5.159-7-12-7zm0 11c-5.151 0-9-2.112-9-4 0-1.025 1.14-2.113 3-2.9v2.9h3v-3.746a17.713 17.713 0 0 1 3-.254c5.151 0 9 2.112 9 4s-3.849 4-9 4zm5-4a2 2 0 1 1 -2-2 2 2 0 0 1 2 2z"/></svg>
);
