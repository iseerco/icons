import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BusinessValue = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.092 13.8 1.558 2.077c.492.656.462 1.565-.071 2.188l-5.568 5.935 2.06-6h-4.121l2.06 6-5.566-5.935c-.534-.623-.563-1.532-.071-2.188l1.558-2.077c.378-.504.97-.8 1.6-.8h1.605l-1.126 3h4l-1.126-3h1.606c.63 0 1.222.296 1.6.8zm1.908-4.8v2h-24v-2c0-2.757 2.243-5 5-5h1.101c.465-2.279 2.485-4 4.899-4h2c2.414 0 4.434 1.721 4.899 4h1.101c2.757 0 5 2.243 5 5zm-8.184-5c-.414-1.161-1.514-2-2.816-2h-2c-1.302 0-2.402.839-2.816 2h7.631zm-4.829 15.434c-1.213-1.409-1.276-3.339-.212-4.757l1.258-1.677h-12.033v6c0 2.757 2.243 5 5 5h10.27z"/></svg>
);
