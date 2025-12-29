import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrMusicFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16 11.5a1.5 1.5 0 0 1 -1.5 1.5h-.5v3a1.494 1.494 0 0 1 -.03.3 2.993 2.993 0 1 1 -2.97-3.3v-.5a2.5 2.5 0 0 1 2.5-2.5h1a1.5 1.5 0 0 1 1.5 1.5zm6-3.343v10.343a5.507 5.507 0 0 1 -5.5 5.5h-9a5.507 5.507 0 0 1 -5.5-5.5v-13a5.507 5.507 0 0 1 5.5-5.5h6.343a5.464 5.464 0 0 1 3.889 1.611l2.657 2.657a5.464 5.464 0 0 1 1.611 3.889zm-3 10.343v-9.5h-4a2 2 0 0 1 -2-2v-4h-5.5a2.5 2.5 0 0 0 -2.5 2.5v13a2.5 2.5 0 0 0 2.5 2.5h9a2.5 2.5 0 0 0 2.5-2.5z"/></svg>
);
