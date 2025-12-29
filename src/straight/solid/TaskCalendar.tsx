import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TaskCalendar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 19v5h-12v-5zm0-2v-1c0-1.103-.897-2-2-2v-2h-2v2h-4v-2h-2v2c-1.103 0-2 .897-2 2v1zm-11.171-15c-.413-1.164-1.525-2-2.829-2h-2c-1.304 0-2.416.836-2.829 2h-5.171v19c0 1.657 1.343 3 3 3h7v-8h-2v-2h2.555c.347-.597.852-1.075 1.445-1.421v-.579h-4v-2h10v-8zm-6.829 14h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2zm8 0h-6v-2h6z"/></svg>
);
