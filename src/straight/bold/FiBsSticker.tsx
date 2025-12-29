import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSticker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0a12 12 0 0 0 0 24h.621l11.379-11.379v-.621a12.013 12.013 0 0 0 -12-12zm-9 12a9 9 0 0 1 17.766-2h-.266a10.5 10.5 0 0 0 -10.5 10.5v.267a9.011 9.011 0 0 1 -7-8.767z"/></svg>
);
