import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Highlighter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.103,21.517c-.734,.312-1.529,.483-2.343,.483H3.414l-1.707,1.707c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l1.707-1.707v-4.346c0-.814,.171-1.609,.483-2.344l7.62,7.62ZM22.682,1.705l-.387-.387c-1.662-1.662-4.357-1.757-6.136-.212L4.007,11.762c-.147,.131-.285,.27-.417,.414l8.234,8.234c.145-.134,.286-.274,.419-.423L22.897,7.837c1.543-1.776,1.447-4.47-.216-6.133Z"/></svg>

);
