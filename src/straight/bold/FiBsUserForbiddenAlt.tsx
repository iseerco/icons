import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserForbiddenAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,12c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Zm3,6c0,.267-.046,.521-.112,.767l-3.655-3.656c.246-.066,.5-.112,.767-.112,1.654,0,3,1.346,3,3Zm-6,0c0-.267,.046-.521,.112-.767l3.655,3.656c-.246,.066-.5,.112-.767,.112-1.654,0-3-1.346-3-3Zm-6-6c3.309,0,6-2.691,6-6S12.309,0,9,0,3,2.691,3,6s2.691,6,6,6Zm0-9c1.654,0,3,1.346,3,3s-1.346,3-3,3-3-1.346-3-3,1.346-3,3-3Zm2.079,11c-.523,.904-.875,1.917-1.01,3H5c-1.103,0-2,.897-2,2v5H0v-5c0-2.757,2.243-5,5-5h6.079Z"/>
</svg>

);
