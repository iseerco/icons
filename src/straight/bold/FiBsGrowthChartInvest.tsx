import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGrowthChartInvest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m6,11l3-3v16h-3v-13Zm5,13h3v-12l-3-3v15Zm-10,0h3v-11l-3,3v8ZM22.909,0h-5.909l2.439,2.439-3.939,3.939L9.5.378.046,9.833l2.121,2.121,7.333-7.333,6,6,6.061-6.061,2.439,2.439V1.091c0-.602-.488-1.091-1.091-1.091Zm-3.909,15h2c.552,0,1,.448,1,1h2c0-1.654-1.346-3-3-3v-1h-2v1c-1.654,0-3,1.346-3,3,0,1.359.974,2.51,2.315,2.733l3.04.506c.374.062.645.382.645.761,0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1h-2c0,1.654,1.346,3,3,3v1h2v-1c1.654,0,3-1.346,3-3,0-1.359-.974-2.51-2.315-2.733l-3.04-.506c-.374-.062-.645-.382-.645-.761,0-.552.448-1,1-1Z"/>
</svg>

);
