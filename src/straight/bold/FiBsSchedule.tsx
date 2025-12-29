import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSchedule = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5 2h-2.5v-2h-3v2h-6v-2h-3v2h-2.5c-1.93 0-3.5 1.57-3.5 3.5v18.5h24v-18.5c0-1.93-1.57-3.5-3.5-3.5zm-11.118 7.782 1.414-1.414 1.211 1.211 1.19-1.19 1.414 1.414-1.19 1.19 1.226 1.226-1.414 1.414-1.226-1.226-1.223 1.223-1.414-1.414 1.223-1.223zm-5.781 9.235 2.029-2.117 1.398 1.43-2.021 2.111-.004.004c-.744.744-2.058.746-2.823-.019l-1.209-1.112 1.387-1.441 1.244 1.145zm13.37.297 1.387-1.441 1.244 1.145 2.029-2.117 1.398 1.43-2.021 2.111-.004.004c-.744.744-2.058.746-2.823-.019l-1.209-1.112zm-.971-4.313v6h-8v-6h-5v-7h5v7h8v-7h5v7z"/></svg>
);
