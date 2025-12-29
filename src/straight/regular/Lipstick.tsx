import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lipstick = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 13v-4h-1v-7a2 2 0 0 0 -2.895-1.788l-3.447 1.724a2.983 2.983 0 0 0 -1.658 2.683v4.381h-1v4h-2v11h14v-11zm-7-8.381a1 1 0 0 1 .553-.894l3.447-1.725v7h-4zm-1 6.381h6v2h-6zm8 11h-10v-7h10z"/></svg>
);
