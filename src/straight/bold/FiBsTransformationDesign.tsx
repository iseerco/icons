import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTransformationDesign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.329,0l-5.284,21.136-.045,2.864h11.671L23.955,2.864l.045-2.864h-11.671Zm4,21h-6.157L14.671,3h6.157l-4.5,18Zm-13.329,0h2v3H0v-5h3v2ZM0,0h5v3h-2v2H0V0Zm3,11H0v-4h3v4Zm0,6H0v-4h3v4ZM9.652,3h-2.652V0h3.223l-.571,3Z"/>
</svg>

);
