import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            className='pizza-block'
            viewBox="0 0 400 430"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="177" cy="127" r="127" />
            <rect x="49" y="271" rx="0" ry="0" width="246" height="21" />
            <rect x="4" y="310" rx="0" ry="0" width="336" height="66" />
            <rect x="4" y="400" rx="0" ry="0" width="150" height="55" />
            <rect x="216" y="387" rx="0" ry="0" width="118" height="43" />
        </ContentLoader>
    )
}

export default LoadingBlock