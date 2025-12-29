import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PeopleGroup = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9.5,4.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm7.5,14.5h-2v5h-2v-5h-2v5h-2v-5h-2V11c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3v8Zm2.5-14c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5ZM7,2.5C7,1.119,5.881,0,4.5,0S2,1.119,2,2.5c0,1.381,1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5Zm-2,8.5c0-2.161,1.387-3.989,3.311-4.686h0c-.398-.195-.839-.314-1.311-.314H3c-1.654,0-3,1.346-3,3v8H2v5h2v-5l1-.037v-5.963Zm14,5.963l1,.037v5s2,0,2,0v-5h2s0-8,0-8c0-1.654-1.346-3-3-3h-4c-.472,0-.913,.119-1.311,.314h0c1.924,.697,3.311,2.524,3.311,4.686v5.963Z"/>
</svg>

);
