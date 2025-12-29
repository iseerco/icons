import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScreenRecorder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5 11h5v4h-5zm8 9v2h5v2h-12v-2h5v-2h-11v-15c0-1.654 1.346-3 3-3h10s1.349.003 1.349.003c-.222.626-.349 1.296-.349 1.997 0 3.309 2.692 6 6 6 1.537 0 2.937-.586 4-1.54v11.54zm-1-5.217 3 2.217v-8l-3 2.217v-2.217h-9v8h9zm12-10.783c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4z"/></svg>
);
