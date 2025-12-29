import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsAssessmentAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.086,9h-3.675c.377-.927.589-1.939.589-3h3.5c.766,0,1.47.255,2.047.674-.242.157-.473.338-.685.551l-1.775,1.775Zm.914,12H6v-7c-1.061,0-2.073-.212-3-.589v10.589h18v-7.086l-3,3v1.086Zm5.361-12.361c-.852-.852-2.234-.852-3.086,0l-7.275,7.275v3.086h3.086l7.275-7.275c.852-.852.852-2.234,0-3.086Zm-17.361,3.361c-3.314,0-6-2.686-6-6S2.686,0,6,0s6,2.686,6,6-2.686,6-6,6Zm.748-3.557l.004-.004,3.607-3.696-1.398-1.43-3.614,3.703-2.216-2.301-1.387,1.441,2.182,2.268c.766.765,2.079.763,2.823.019Z"/>
</svg>

);
