import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Highlighter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.682,1.705l-.387-.387c-1.662-1.662-4.357-1.757-6.136-.212L4.007,11.762c-1.275,1.137-2.007,2.769-2.007,4.478v4.346l-1.707,1.707c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293l1.707-1.707H7.76c1.709,0,3.341-.731,4.483-2.013L22.897,7.837c1.543-1.776,1.447-4.47-.216-6.133ZM4,20v-3.76c0-.253,.033-.502,.079-.747l4.427,4.427c-.245,.047-.494,.079-.747,.079h-3.76ZM21.391,6.522l-10.646,12.141c-.106,.119-.232,.213-.35,.318l-5.376-5.376c.103-.116,.195-.24,.312-.344L17.474,2.612c.986-.856,2.482-.805,3.407,.12l.387,.387c.924,.924,.977,2.42,.123,3.404Z"/></svg>

);
