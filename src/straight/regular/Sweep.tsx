import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sweep = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3.333 4.667-2.333-1.167 2.333-1.167 1.167-2.333 1.167 2.333 2.333 1.167-2.333 1.167-1.167 2.333zm18.167-.167-1-2-1 2-2 1 2 1 1 2 1-2 2-1zm-.5 8.5v7c0 2.206-1.794 4-4 4h-16v-2c1.103 0 2-.897 2-2v-7c0-1.654 1.346-3 3-3h5v-10h2v10h5c1.654 0 3 1.346 3 3zm-2 3h-2v4h-2v-4h-2v4h-2v-4h-2v4h-2v-4h-2v4c0 .728-.195 1.411-.537 2h12.537c1.103 0 2-.897 2-2zm0-3c0-.551-.448-1-1-1h-12c-.551 0-1 .449-1 1v1h14z"/></svg>
);
