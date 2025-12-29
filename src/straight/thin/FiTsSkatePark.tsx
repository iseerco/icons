import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSkatePark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.803 23h1.197v1h-24v-1h15.76c-12.591-3.96-12.76-18.332-12.76-18.5v-3.5h-3v-1h4v4.5c0 .755.235 18.5 18.803 18.5zm-1.794-7c-.457 0-.886-.178-1.209-.501l-7.299-7.3c-.323-.322-.501-.751-.501-1.208v-2.991h-1v2.991c0 .724.282 1.405.794 1.916l7.299 7.299c.511.512 1.192.794 1.916.794h2.991v-1zm-10.302-5.293c.391-.391.391-1.024 0-1.414-.391-.391-1.024-.391-1.414 0-.391.391-.391 1.024 0 1.414s1.024.391 1.414 0zm8 8c.391-.391.391-1.024 0-1.414-.391-.391-1.024-.391-1.414 0-.391.391-.391 1.024 0 1.414s1.024.391 1.414 0z"/></svg>
);
