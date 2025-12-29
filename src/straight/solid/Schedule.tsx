import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Schedule = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m2.181 19.975-1.209-1.112 1.387-1.441 1.244 1.145 2.029-2.117 1.398 1.43-2.021 2.111-.004.004c-.744.744-2.058.746-2.823-.019zm8.603-6.345 1.223-1.223 1.226 1.226 1.414-1.414-1.226-1.226 1.19-1.19-1.414-1.414-1.19 1.19-1.211-1.211-1.414 1.414 1.211 1.211-1.223 1.223zm10.216-11.63h-3v-2h-2v2h-8v-2h-2v2h-3c-1.654 0-3 1.346-3 3v1h24v-1c0-1.654-1.346-3-3-3zm-5 13h8v-7h-8zm-16-7v7h8v-7zm18.358 9.422-1.387 1.441 1.209 1.112c.766.765 2.079.763 2.823.019l.004-.004 2.021-2.111-1.398-1.43-2.029 2.117-1.244-1.145zm-10.358 4.578h-8v2h24v-2h-8v-7h-8z"/></svg>
);
