require('./keywords')
var GoogleNews, googleNews, track;
  
GoogleNews = require('google-news');
googleNews = new GoogleNews();


for (let track of keywords) 
 googleNews.stream(track, function (stream) {
   stream.on(GoogleNews.DATA, function (data) {
      var date = new Date();
      //all news for past 7 days 
      date.setDate(date.getDate() - 7);
      if (data.pubDate >= date){
        console.log("-------------" + track + "-------------");

return console.log('TITLE NEWS :' + data.title + "\n" + "URL :" + data.link + "\n" + "Published date :" + data.pubDate + "\n" + "Description :" + data.description + "\n" + "Author :" + data.author + "\n"); //+JSON.stringify(data)
      }
     });

    stream.on(GoogleNews.ERROR, function (error) {
      return console.log('Error Event received... ' + error);
    });
  });


