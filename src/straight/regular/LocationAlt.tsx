import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LocationAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 .007a10 10 0 0 0 -7.063 17.078l5.025 4.915h-4.962v2h14v-2h-4.962l5.033-4.923a10 10 0 0 0 -7.071-17.07zm5.665 15.648-5.665 5.545-5.657-5.537a8 8 0 1 1 11.322-.008zm-10.665-9.273v6.236l5 2.5 5-2.5v-6.236l-5-2.5zm8 5-3 1.5-3-1.5v-3.764l.118-.059 2.882 1.441 2.882-1.441.118.059z"/></svg>
);
