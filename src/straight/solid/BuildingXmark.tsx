import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BuildingXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.773 19.016-4.016-4.016h-1.757v-2h3v1.603l4-4v-7.603c0-1.654-1.346-3-3-3h-10c-1.654 0-3 1.346-3 3v21h12.572l-1.392-1.392 3.593-3.593zm-5.773-14.016h3v2h-3zm0 4h3v2h-3zm-2 10h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm2 10h3v2h-3zm11.43 2.016 3.57 3.593-1.391 1.392-3.593-3.57-3.593 3.57-1.414-1.392 3.593-3.593-3.593-3.593 1.414-1.414 3.593 3.593 3.593-3.593 1.391 1.414z"/></svg>
);
