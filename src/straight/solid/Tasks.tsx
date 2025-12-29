import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tasks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m16.209 19.425-1.209-1.112 1.387-1.441 1.244 1.145 2.307-2.395 1.398 1.43-2.299 2.388-.004.004c-.744.744-2.058.746-2.823-.019zm-16.209-16.425v2h5v-5h-2c-1.654 0-3 1.346-3 3zm0 21h5v-17h-5zm21-24h-14v5h17v-2c0-1.654-1.346-3-3-3zm-10.467 11.443.004-.004 2.299-2.388-1.398-1.43-2.307 2.395-1.244-1.145-1.387 1.441 1.209 1.112c.766.765 2.079.763 2.823.019zm3.467 2.557h8v8h-8v-8h-7v10h17v-17h-10z"/></svg>
);
