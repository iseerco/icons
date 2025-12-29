import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSignPostsWrench = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,5.5v4.106c-.82-.837-1.847-1.468-3-1.812v-2.294c0-.275-.225-.5-.5-.5H3.5c-.276,0-.5.225-.5.5v10.5h9.165c.246,1.125.761,2.149,1.476,3h-7.641v5h-3v-5H0V5.5c0-1.758,1.308-3.204,3-3.449V0h3v2h12V0h3v2.051c1.692.245,3,1.691,3,3.449Zm-3,4.422v3.078c0,1.103-.897,2-2,2s-2-.897-2-2v-3.078c-1.764.772-3,2.529-3,4.578s1.236,3.806,3,4.578v4.922h4v-4.922c1.764-.772,3-2.529,3-4.578s-1.236-3.806-3-4.578Z"/>
</svg>

);
