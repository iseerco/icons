import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlayAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.984 12-3.984 2.277v-4.554zm10.016-9v21h-24v-21a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3zm-5.984 9-10.016-5.723v11.446z"/></svg>
);
