import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonArrowUpFromLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M2.5,2.5C2.5,1.119,3.619,0,5,0s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm13.207,5.817l2.293-2.352v12.034c0,.553,.448,1,1,1s1-.447,1-1V6.024l2.293,2.293c.391,.391,1.023,.391,1.414,0s.391-1.023,0-1.414l-3.335-3.336c-.756-.754-1.988-.755-2.745,0l-3.334,3.335c-.391,.391-.391,1.023,0,1.414s1.023,.391,1.414,0Zm8.293,14.683c0,.553-.448,1-1,1H1c-.552,0-1-.447-1-1s.448-1,1-1h1v-5.556c-1.19-.694-2-1.97-2-3.444v-3c0-2.206,1.794-4,4-4h2c2.206,0,4,1.794,4,4v3c0,1.474-.81,2.75-2,3.444v5.556h15c.552,0,1,.447,1,1Zm-20-1h2v-5h-2v5Z"/>
</svg>

);
