import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserCircleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17.5 0c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zm1 10h-2v-4h-2.5l2.687-2.687c.417-.417 1.093-.417 1.51 0l2.688 2.687h-2.385zm-6.5 14h-12v-2.5c0-1.93 1.57-3.5 3.5-3.5h5c1.93 0 3.5 1.57 3.5 3.5zm-6-8c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/></svg>
);
