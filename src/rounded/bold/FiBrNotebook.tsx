import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrNotebook = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 2.607v-1.107a1.5 1.5 0 0 0 -3 0v.5h-2.5v-.5a1.5 1.5 0 0 0 -3 0v.5h-2.5v-.5a1.5 1.5 0 0 0 -3 0v1.107a5.5 5.5 0 0 0 -3 4.893v11a5.506 5.506 0 0 0 5.5 5.5h9a5.507 5.507 0 0 0 5.5-5.5v-11a5.5 5.5 0 0 0 -3-4.893zm0 15.893a2.5 2.5 0 0 1 -2.5 2.5h-9a2.5 2.5 0 0 1 -2.5-2.5v-11a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5zm-2-10a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 0-3h7a1.5 1.5 0 0 1 1.5 1.5zm-3.5 5a1.5 1.5 0 0 1 -1.5 1.5h-3.5a1.5 1.5 0 0 1 0-3h3.5a1.5 1.5 0 0 1 1.5 1.5z"/></svg>
);
