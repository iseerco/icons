import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DollyFlatbed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,6c0-1.654-1.346-3-3-3h-10c-1.654,0-3,1.346-3,3v10h16V6Zm-9-1h2v3h-2v-3Zm7,9h-12V6c0-.551.448-1,1-1h2v5h6v-5h2c.552,0,1,.449,1,1v8Zm-15,4.038c-.552,0-1-.448-1-1V3.039C5,1.384,3.654.039,2,.039H0v2h2c.552,0,1,.449,1,1v14c0,1.654,1.346,3,3,3v.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-.5h3v.5c0,1.93,1.57,3.5,3.5,3.5s3.5-1.57,3.5-3.5v-.5h1v-2H6Zm5,2.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-.5h3v.5Zm10,0c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5v-.5h3v.5Z"/>
</svg>

);
