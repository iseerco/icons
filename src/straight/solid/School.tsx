import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const School = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 9v2h-6l-5-5h8a3 3 0 0 1 3 3zm-24 0v2h6l5-5h-8a3 3 0 0 0 -3 3zm17-6.5-4-2.5h-2v6h2v-1zm.172 10.5h6.828v11h-9v-4a3 3 0 0 0 -6 0v4h-9v-11h6.828l5.172-5zm-11.172 7h-3v2h3zm0-4h-3v2h3zm8-3a2 2 0 1 0 -2 2 2 2 0 0 0 2-2zm4 5h3v-2h-3zm0 4h3v-2h-3zm-6-3a1 1 0 0 0 -1 1v4h2v-4a1 1 0 0 0 -1-1z"/></svg>
);
