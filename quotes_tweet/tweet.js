"use strict";
const _ = {
const quotes = document.getElementById("quotes");
        console.log(quotes)
        const author = document.getElementById("author");
        const new_Q = document.getElementById("new_Q");
        const tweetMe = document.getElementById("tweetMe");
        let realData = "";
        let quotesData = "";
        const tweetNow = () => {
            let  tweetPost = `https://twitter.com/compose/tweet?text=${quotesData.text} - ${quotesData.author}`;
            window.open(tweetPost)
        };
        const getNewQuotes = () => {
            let rnum = Math.floor(Math.random() * 101);
            console.log(rnum)
            quotesData = realData[rnum]
            quotes.innerText = `${quotesData.text}`;
            quotesData.author == null   
            ? (author.innerText = ' - unKnown')
            : (author.innerText = ` - ${quotesData.author}`);
        };
        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes();
                console.log(realData);
            } catch (error) {}
            
        };
        tweetMe.addEventListener("click",tweetNow);
        new_Q.addEventListener("click",getNewQuotes);
        getQuotes();
