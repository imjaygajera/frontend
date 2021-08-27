"use strict";
	const quotes = document.getElementById("quotes");
        const author = document.getElementById("author");
        const new_Q = document.getElementById("new_Q");
        const tweetMe = document.getElementById("tweetMe");
        let realData = "";
        let quotesData = "";
        let realImg = "";
        const J = {
	W:window,
	D:document,
	H:history,
	L:localStorage,
	chrome:navigator.userAgent.indexOf("Chrome"),
	S:['addEventListener','load','resize','keyup','click','change'],
	gret:"",
	BGImage:""
}
        const tweetNow = () => {
            let  tweetPost = `https://twitter.com/compose/tweet?text=${quotesData.text} ${author.innerText}`;
            window.open(tweetPost)
        };
        const getNewQuotes = () => {
            let rnum = Math.floor(Math.random()*Math.floor(realData.length));
            quotesData = realData[rnum]
            quotes.innerText = `${quotesData.text}`;
            (quotesData.author == null) ? (author.innerText = ' - unKnown') : (author.innerText = ` - ${quotesData.author}`);
        };
        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
            const imgApi = 'https://picsum.photos/'+J.W.innerWidth+'/'+J.W.innerHeight;
            try {
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes();
            } catch (error) {}
            try{
                let img = await fetch(imgApi)
                let ImgAPi = document.getElementById("ImgAPi");
                ImgAPi.src = img.url
                realImg = await img.json();
            }catch (error) {}
        };
        tweetMe.addEventListener("click",tweetNow);
        new_Q.addEventListener("click",getNewQuotes);
        getQuotes();
