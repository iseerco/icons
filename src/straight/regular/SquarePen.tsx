import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquarePen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 0h-18c-1.654 0-3 1.346-3 3v21h24v-21c0-1.654-1.346-3-3-3zm1 22h-20v-19c0-.551.449-1 1-1h18c.552 0 1 .449 1 1zm-8.119-16.123-8.881 8.881v4.242h4.242l8.865-8.865c.565-.542.89-1.321.89-2.137 0-.815-.325-1.594-.874-2.12-1.133-1.134-3.111-1.133-4.242 0zm-5.467 11.123h-1.414v-1.414l5.836-5.836 1.414 1.414zm8.294-8.294-1.044 1.044-1.413-1.413 1.045-1.045c.375-.376 1.02-.392 1.428.016.173.167.272.418.273.691 0 .273-.101.525-.289.707z"/></svg>
);
