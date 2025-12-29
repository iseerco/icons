import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiaryBookmarks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.5,8c.828,0,1.5-.672,1.5-1.5v-2c0-.828-.672-1.5-1.5-1.5h-.5v-1c0-1.103-.897-2-2-2H5c-1.654,0-3,1.346-3,3v18c0,1.654,1.346,3,3,3h17v-4h.5c.828,0,1.5-.672,1.5-1.5v-2c0-.828-.672-1.5-1.5-1.5h-.5v-1h.5c.828,0,1.5-.672,1.5-1.5v-2c0-.828-.672-1.5-1.5-1.5h-.5v-1h.5Zm-2.5,10h-12V2h12v16ZM5,2h1v16h-1c-.351,0-.687.061-1,.172V3c0-.552.448-1,1-1Zm0,20c-.552,0-1-.448-1-1s.448-1,1-1h15v2H5Z"/>
</svg>

);
