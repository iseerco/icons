import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiaryBookmarks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.5,8c.828,0,1.5-.672,1.5-1.5v-2c0-.828-.672-1.5-1.5-1.5h-.5v-.5c0-1.379-1.121-2.5-2.5-2.5H5C2.794,0,1,1.794,1,4v16c0,2.206,1.794,4,4,4h17v-4h.5c.828,0,1.5-.672,1.5-1.5v-2c0-.828-.672-1.5-1.5-1.5h-.5v-1h.5c.828,0,1.5-.672,1.5-1.5v-2c0-.828-.672-1.5-1.5-1.5h-.5v-1h.5ZM4,4c0-.552.448-1,1-1h2v13h-2c-.345,0-.68.044-1,.126V4Zm15,17H5c-.552,0-1-.448-1-1s.448-1,1-1h14v2Zm0-5h-9V3h9v13Z"/>
</svg>

);
