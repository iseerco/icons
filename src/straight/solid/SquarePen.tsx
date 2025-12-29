import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquarePen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.36 11.525-5.474 5.475h-1.885v-1.885l5.475-5.475 1.885 1.885zm.866-4.636-1.337 1.337 1.885 1.885 1.336-1.336c.507-.458.508-1.415.016-1.87-.533-.533-1.397-.517-1.899-.016zm8.773-3.889v21h-23.999v-21c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3zm-4.504 4.832c0-.907-.36-1.771-.972-2.355-1.256-1.26-3.456-1.259-4.712 0l-8.811 8.809v4.713h4.713l8.796-8.796c.627-.601.986-1.466.986-2.372z"/></svg>
);
