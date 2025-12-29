import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareEnvelope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 0h-18c-1.654 0-3 1.346-3 3v21h24v-21c0-1.654-1.346-3-3-3zm1 22h-20v-19c0-.551.449-1 1-1h18c.551 0 1 .449 1 1zm-6-16h-8c-1.654 0-3 1.346-3 3v9h14v-9c0-1.654-1.346-3-3-3zm0 2c.122 0 .236.029.344.07l-3.638 3.638c-.377.377-1.036.377-1.414 0l-3.637-3.637c.108-.04.222-.07.344-.07h8zm-9 8v-5.758l2.878 2.878c.566.567 1.32.879 2.122.879s1.555-.312 2.121-.879l2.879-2.879v5.758h-10z"/></svg>
);
