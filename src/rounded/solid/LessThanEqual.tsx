import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LessThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m20,24H4c-.552,0-1-.447-1-1s.448-1,1-1h16c.552,0,1,.447,1,1s-.448,1-1,1Zm.919-5.605c.218-.508-.017-1.096-.524-1.313l-14.58-6.262c-.601-.258-.814-.851-.814-1.319s.214-1.062.814-1.319L20.395,1.919c.507-.218.742-.806.524-1.313-.218-.508-.808-.74-1.313-.524L5.024,6.343c-1.249.537-2.024,1.747-2.024,3.157s.776,2.62,2.025,3.157l14.581,6.262c.128.055.262.081.394.081.388,0,.757-.227.919-.605Z"/>
</svg>

);
