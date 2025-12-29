import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BridgeConstruction = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 8v3h-4v-3h-2v3h-4v-3h-2v3h-3v7c1.654 0 3 1.346 3 3v3h2v-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3h2v-3c0-1.654 1.346-3 3-3h1v-10zm-14.49-4-2-2h-.51v-2h-2v2h-1v2h-2v2h2v2h1v14h-3v2h8v-2h-3v-14h3v-2h16v-2z"/></svg>
);
