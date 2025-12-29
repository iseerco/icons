import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MusicFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14 7v-6.54a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486a6.954 6.954 0 0 1 1.591 2.464h-6.54a1 1 0 0 1 -1-1zm7.976 3h-6.976a3 3 0 0 1 -3-3v-6.976c-.161-.011-.322-.024-.485-.024h-4.515a5.006 5.006 0 0 0 -5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-8.515c0-.163-.013-.324-.024-.485zm-7.976 4h-1v4.5a2.5 2.5 0 1 1 -2.5-2.5 2.577 2.577 0 0 1 .5.05v-2.05a2 2 0 0 1 2-2h1a1 1 0 0 1 0 2z"/></svg>
);
