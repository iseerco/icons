import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCastleTower = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 21h-1.5v-19.5c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5 1.5v1.5h-2.5v-1.5c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5 1.5v1.5h-2.5v-1.5c0-.828-.671-1.5-1.5-1.5s-1.5.672-1.5 1.5v19.5h-1.5c-.829 0-1.5.672-1.5 1.5s.671 1.5 1.5 1.5h17c.829 0 1.5-.672 1.5-1.5s-.671-1.5-1.5-1.5zm-12.5-15h8v15h-8zm5.5 3.5v1.5c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm0 7v1.5c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1v-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5z"/></svg>
);
