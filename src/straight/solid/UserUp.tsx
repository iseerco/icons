import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 20v4h-15v-4c0-2.206 1.794-4 4-4h7c2.206 0 4 1.794 4 4zm-7.5-6c3.033 0 5.5-2.467 5.5-5.5s-2.467-5.5-5.5-5.5-5.5 2.467-5.5 5.5 2.467 5.5 5.5 5.5zm15.973-10.207-3.34-3.339c-.292-.292-.681-.454-1.095-.454-.414 0-.802.162-1.094.454l-3.339 3.339 1.414 1.414 1.984-1.984v5.777h2v-5.849l2.056 2.056z"/></svg>
);
