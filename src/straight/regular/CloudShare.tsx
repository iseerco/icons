import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CloudShare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 17a2.986 2.986 0 0 0 -2.077.844l-2.96-1.481a2.9 2.9 0 0 0 .037-.363 2.9 2.9 0 0 0 -.037-.363l2.96-1.481a2.994 2.994 0 1 0 -.923-2.156 2.9 2.9 0 0 0 .037.363l-2.96 1.481a3 3 0 1 0 0 4.312l2.96 1.481a2.9 2.9 0 0 0 -.037.363 3 3 0 1 0 3-3zm0-6a1 1 0 1 1 -1 1 1 1 0 0 1 1-1zm-8 6a1 1 0 1 1 1-1 1 1 0 0 1 -1 1zm8 4a1 1 0 1 1 1-1 1 1 0 0 1 -1 1z"/><path d="m16 21h-10.5a3.491 3.491 0 0 1 -.872-6.874l1.438-.371-.884-1.192a5.945 5.945 0 0 1 -1.182-3.563 6 6 0 0 1 11.94-.8l.1.736 1.748-1.748a8 8 0 0 0 -15.788 1.812 7.912 7.912 0 0 0 .9 3.671 5.49 5.49 0 0 0 2.6 10.329h10.5a7.986 7.986 0 0 0 .972-.065 4.946 4.946 0 0 1 -.872-1.935c-.033 0-.066 0-.1 0z"/></svg>
);
