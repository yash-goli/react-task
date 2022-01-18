import React from 'react';
import ContentLoader from "react-content-loader";

const Loader = () => (
  <ContentLoader 
    speed={0}
    width={830}
    height={94}
    viewBox="0 0 830 94"
    backgroundColor="#ededed"
    foregroundColor="#ededed"
    style={{border: '1px solid #ededed'}}
    animate={true}
  >
    <rect x={144} y={10} rx="0" ry="0" width="410" height={24} /> 
    <rect x={144} y={46} rx="0" ry="0" width={360} height={16} /> 
    <rect x={144} y={72} rx="0" ry="0" width={140} height={10} /> 
    <rect x={10} y={10} rx="0" ry="0" width={110} height={75} />
  </ContentLoader>
);

export default Loader;