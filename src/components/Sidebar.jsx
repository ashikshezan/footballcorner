import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
export default function Sidebar() {
  return (
    <div className="sidebar">
      <section className="twitterContainer">
        <div className="twitter-embed">
          <TwitterTimelineEmbed
            sourceType="list"
            ownerScreenName="ashikshezan_"
            slug="Football"
            options={{
              // tweetLimit: "10",
              width: "100%",
              // height: "100%"
            }}
            theme="dark"
            noHeader={true}
            noBorders={true}
            noFooter={true}

          ></TwitterTimelineEmbed>

        </div>
      </section>
    </div>
  )
}
