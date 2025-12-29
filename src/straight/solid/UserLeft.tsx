import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 6h-5.778l1.985 1.984-1.414 1.414-3.34-3.339c-.604-.603-.604-1.585 0-2.189l3.341-3.34 1.414 1.414-2.056 2.056h5.849v2zm-13 10h-7c-2.206 0-4 1.794-4 4v4h15v-4c0-2.206-1.794-4-4-4zm-3.5-2c3.032 0 5.5-2.467 5.5-5.5s-2.468-5.5-5.5-5.5-5.5 2.467-5.5 5.5 2.468 5.5 5.5 5.5z"/></svg>
);
