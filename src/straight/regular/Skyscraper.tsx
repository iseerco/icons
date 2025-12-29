import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Skyscraper = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18 11v-3c0-1.654-1.346-3-3-3h-2v-5h-2v5h-2c-1.654 0-3 1.346-3 3v3c-1.654 0-3 1.346-3 3v10h2v-10c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v10h2v-10c0-1.654-1.346-3-3-3zm-10 0v-3c0-.551.449-1 1-1h6c.551 0 1 .449 1 1v3zm3 5h2v3h-2zm0 5h2v3h-2zm4-5h2v3h-2zm0 5h2v3h-2zm-8-5h2v3h-2zm0 5h2v3h-2z"/></svg>
);
