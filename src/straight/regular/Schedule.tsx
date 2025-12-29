import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Schedule = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 2h-3v-2h-2v2h-8v-2h-2v2h-3c-1.654 0-3 1.346-3 3v19h24v-19c0-1.654-1.346-3-3-3zm-18 2h18c.552 0 1 .449 1 1v1h-20v-1c0-.551.448-1 1-1zm6.382 5.782 1.414-1.414 1.211 1.211 1.19-1.19 1.414 1.414-1.19 1.19 1.226 1.226-1.414 1.414-1.226-1.226-1.223 1.223-1.414-1.414 1.223-1.223zm-6.944 8.09 1.244 1.145 2.029-2.117 1.398 1.43-2.021 2.111-.004.004c-.744.744-2.058.746-2.823-.019l-1.209-1.112 1.387-1.441zm14.613 1.441 1.387-1.441 1.244 1.145 2.029-2.117 1.398 1.43-2.021 2.111-.004.004c-.744.744-2.058.746-2.823-.019l-1.209-1.112zm-1.051-4.313v7h-8v-7h-6v-7h6v7h8v-7h6v7z"/></svg>
);
