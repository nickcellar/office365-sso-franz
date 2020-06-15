"use strict";

module.exports = Franz => {

  Franz.loop(() => {
    try {
      const unreadMail = parseInt(jQuery("div[title='Inbox'] > span").last().text());
      Franz.setBadge(unreadMail);
    } catch (error) {
      console.log("Failed to get message count")
    }
  });
};