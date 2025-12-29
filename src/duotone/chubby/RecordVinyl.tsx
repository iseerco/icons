import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RecordVinyl = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="12" cy="12" opacity=".5" r="11"/><path d="m12 16.873c-3.279 0-4.873-1.594-4.873-4.873s1.594-4.873 4.873-4.873 4.873 1.594 4.873 4.873-1.594 4.873-4.873 4.873zm0-7.746c-1.905 0-2.873.444-2.873 2.873s.968 2.873 2.873 2.873 2.873-.444 2.873-2.873-.968-2.873-2.873-2.873z"/><circle cx="12" cy="12.006" r="1"/></svg>
);
