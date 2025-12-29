import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBucket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,8h-1.217c-.568-2.778-2.319-5.217-4.783-6.647V0H7v1.353c-2.464,1.43-4.215,3.869-4.783,6.647h-1.217v1h1.09l3,15h13.82l3-15h1.09v-1ZM8,1h8v2h-8V1Zm-1,1.526v1.474h10v-1.474c1.9,1.276,3.252,3.247,3.761,5.474H3.239c.509-2.226,1.861-4.197,3.761-5.474Zm11.09,20.474H5.91l-2-10h14.141l.2-1H3.71l-.6-3h17.78l-2.8,14Z"/>
</svg>

);
