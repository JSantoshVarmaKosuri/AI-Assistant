import Button from "@atlaskit/button";
import React from "react";
import InlineWrapper from "../inlinewrapper/InlineWrapper";

export const createHead = (withWidth: boolean) => {
  return {
    cells: [
      {
        key: "summary",
        content: "Summary",
        isSortable: true,
        width: 20,
      },
      {
        key: "description",
        content: "Description",
        shouldTruncate: true,
        isSortable: true,
      },
      {
        key: "actions",
        content: "Actions",
        shouldTruncate: true,
        width: 10,
      },
    ],
  };
};

const MOCKEPICS = [
  {
    name: "User Authentication and Profile Management",
    description:
      "This epic focuses on establishing a robust system for user authentication and managing user profiles within the social media application. It involves creating a seamless experience for users to create accounts, securely log in, and manage their personal information. Additionally, it includes features for users to customize their profiles, such as uploading profile pictures, writing bios, and setting privacy preferences. The goal is to ensure a smooth onboarding process while giving users control over their online identity and privacy settings.",
  },
  {
    name: "News Feed and Content Sharing",
    description:
      "This epic revolves around the core functionality of the social media platform, which is the news feed and content sharing mechanism. It encompasses the development of algorithms to curate a personalized news feed for each user based on their interests, connections, and activity. Users should be able to share various types of content, including text posts, images, and videos, with their followers or the broader community. The epic also includes features such as commenting, liking, and resharing content to foster engagement and interaction among users.",
  },
  {
    name: "Messaging and Notifications",
    description:
      "This epic involves building a comprehensive messaging system to facilitate private communication between users, as well as implementing a robust notification system to keep users informed about relevant activities. The messaging functionality should support one-on-one conversations as well as group chats, with features such as multimedia messaging, read receipts, and message search. Notifications should be delivered in real-time across multiple channels (e.g., in-app, email, push notifications) to alert users about new messages, likes, comments, mentions, and other noteworthy interactions.",
  },
  {
    name: "Content Moderation and Reporting",
    description:
      "This epic is dedicated to ensuring the safety and integrity of the social media platform by implementing effective content moderation tools and reporting mechanisms. It involves developing algorithms and machine learning models to automatically detect and filter out spam, hate speech, fake news, and other forms of inappropriate content. Additionally, the platform should empower users to report objectionable content or abusive behavior, with transparent mechanisms for escalating and addressing such reports. Manual moderation tools should be available for moderators to review reported content and take appropriate actions, such as issuing warnings, removing content, or banning users if necessary.",
  },
  {
    name: "Analytics and Insights",
    description:
      "This epic focuses on providing users and administrators with valuable insights and analytics to understand user behavior, engagement patterns, and overall platform performance. It involves implementing robust analytics tracking to capture key metrics related to user activity, content interactions, audience demographics, and trending topics. Users should have access to personalized dashboards where they can view their own engagement metrics, such as post reach, likes, comments, and follower growth. Administrators should have access to comprehensive analytics tools for monitoring platform-wide metrics, identifying emerging trends, and making data-driven decisions to improve the user experience and drive user engagement. Additionally, sentiment analysis algorithms can be used to gauge the overall sentiment of discussions on the platform and identify potential issues or opportunities for improvement.",
  },
];

export const rows = MOCKEPICS.map((item: any, index: number) => {
  return {
    key: `row-${index}`,
    isHighlighted: false,
    cells: [
      {
        key: `row-${index}-${0}`,
        content: <p>{item.name}</p>,
        // content: (
        //   <InlineWrapper
        //     text={item.name}
        //     placeholder=""
        //     emit={(value) => {
        //       console.log(index, value);
        //     }}
        //   />
        // ),
      },
      {
        key: `row-${index}-${1}`,
        content: <p>{item.description}</p>,
        // content: (
        //   <InlineWrapper
        //     text={item.description}
        //     placeholder=""
        //     emit={(value) => {
        //       console.log(value);
        //     }}
        //   />
        // ),
      },
      {
        key: `row-${index}-${2}`,
        content: <Button appearance="primary">Approve</Button>,
      },
    ],
  };
});
