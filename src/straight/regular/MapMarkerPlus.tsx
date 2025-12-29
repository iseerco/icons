import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MapMarkerPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  

<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
<path d="M255.668,511.885l150.667-147.364c83.577-82.846,84.169-217.758,1.323-301.334s-217.758-84.169-301.334-1.323  c-0.443,0.439-0.884,0.88-1.323,1.323c-83.211,83.213-83.21,218.126,0.003,301.337c0.056,0.056,0.112,0.112,0.168,0.168  L255.668,511.885z M135.13,93.316c66.524-66.618,174.458-66.695,241.076-0.17s66.695,174.458,0.17,241.076L255.668,452.266  L135.13,334.392c-66.571-66.568-66.574-174.498-0.006-241.07C135.126,93.32,135.128,93.318,135.13,93.316L135.13,93.316z   M234.36,235.162h-63.923v-42.616h63.923v-63.923h42.615v63.923h63.923v42.616h-63.923v63.923H234.36V235.162z"/>
</svg>

);
