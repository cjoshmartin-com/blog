import React from 'react'

import Post from "gatsby-theme-blog/src/components/post"
import { css} from "theme-ui"

import {Disqus} from 'gatsby-plugin-disqus'

export default function _post(props){
	const {href, key} = props.location
	const {post} = props.data

	const disqusConfig = {
    url: href,
    identifier: key,
    title: post.title,
  }

return (
		<>
			<Post {...props} />
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            py: 4,
          })}
        >
          <Disqus config={disqusConfig}/>
				</div>
		</>
	)
}
