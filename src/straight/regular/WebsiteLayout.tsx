import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WebsiteLayout = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3 5.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm5.5 1.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm15.5-3v19h-24v-19c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3zm-22 0v4h20v-4c0-.551-.448-1-1-1h-18c-.551 0-1 .449-1 1zm7 12v5h6v-5zm13-2v-4h-20v4zm-20 7h5v-5h-5zm20 0v-5h-5v5z"/></svg>
);
