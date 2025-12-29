import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMakeupBrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.953 4.563-4.517-4.518-14.236 12.087-5.167 2.668v1.99a7.189 7.189 0 0 0 7.18 7.181h2.005l2.589-5.047zm-4.072.169-5.267 6.226-1.559-1.558 6.215-5.279zm-12.496 16.236h-.172a4.185 4.185 0 0 1 -4.18-4.181v-.162l3.473-1.79 2.661 2.665z"/></svg>
);
