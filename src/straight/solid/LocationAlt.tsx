import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LocationAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 10.007a10 10 0 0 0 -17.071-7.071 10 10 0 0 0 .008 14.149l5.025 4.915h-4.962v2h14v-2h-4.962l5.033-4.923a9.932 9.932 0 0 0 2.929-7.07zm-5 2.611-5 2.5-5-2.5v-6.236l5-2.5 5 2.5zm-5-3.618 3-1.5v3.882l-3 1.5-3-1.5v-3.882z"/></svg>
);
