// Please do not change the name of this function
function getTweetData(tweet) {
  let mentionArr = [];
  let tagArr = [];
  if (/@\D[^\s.,!?]*/g.test(tweet)) {
    mentionArr = [...new Set(tweet.match(/@\D[^\s.,!?]*/g))];
  }
  if (/#\D[^\s.,!?]*/g.test(tweet)) {
    tagArr = [...new Set(tweet.match(/#\D[^\s.,!?]*/g))];
  }
  return {
    tags: tagArr,
    mentions: mentionArr,
    tagCount: tagArr.length,
    mentionCount: mentionArr.length,
    length: tweet.length,
  };
}
module.exports = getTweetData;
