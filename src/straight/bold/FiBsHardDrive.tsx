import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHardDrive = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.111 3.288c-.111-1.844-1.646-3.288-3.493-3.288h-13.236c-1.847 0-3.382 1.444-3.493 3.288l-.889 15.212v5.5h22v-5.5zm-17.228.182c.016-.264.235-.47.499-.47h13.235c.264 0 .483.206.499.47l.823 13.53h-15.876zm9.617 18.53c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
);
