import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HoldingHandPizzaBox = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 7h-9c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2h-9v5h24zm0-4.5c0-1.381-1.119-2.5-2.5-2.5h-6.5c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2h-6.5c-1.381 0-2.5 1.119-2.5 2.5v2.5h24zm0 18.5v3h-11.038c-1.897.009-3.758-.521-5.365-1.53l-6.654-4.756c-.934-.585-1.223-1.813-.647-2.753.58-.948 1.819-1.245 2.766-.664l5.892 4.265c.734.872 1.82 1.438 3.046 1.438h5v-2h-5c-1.105 0-2-.895-2-2s.895-2 2-2h5c3.866 0 7 3.134 7 7z"/></svg>
);
