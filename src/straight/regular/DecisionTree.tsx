import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DecisionTree = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m6 20h4v4h-4zm8 4h4v-4h-4zm6-4v4h4v-4zm-20 4h4v-4h-4zm9-6h-8v-8h8v3h2v-5h-3v-8h8v8h-3v5h2v-3h8v8h-8v-3h-6zm8.586-4-1.293 1.293 1.414 1.414 1.293-1.293 1.293 1.293 1.414-1.414-1.293-1.293 1.293-1.293-1.414-1.414-1.293 1.293-1.293-1.293-1.414 1.414zm-7.481-8.575c.766.765 2.079.763 2.823.019l.004-.004 2.299-2.388-1.398-1.43-2.307 2.395-1.244-1.145-1.387 1.441 1.209 1.112zm-1.874 7.628-1.398-1.43-2.307 2.395-1.244-1.145-1.387 1.441 1.209 1.112c.766.765 2.079.763 2.823.019l.004-.004 2.299-2.388z"/></svg>
);
