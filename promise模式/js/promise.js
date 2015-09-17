function Promise(){ 
}

Promise.prototype.then=function(resolved,rejected){ 
}

Promise.prototype.resolve=function(val){ 
}

Promise.prototype.reject=function(val){ 
}

Promise.when=function(){ 
}

function searchTwitter(term) {

    var url, xhr, results, promise;
    url = 'http://search.twitter.com/search.json?rpp=100&q=' + term;
    promise = new Promise();
    xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function (e) {
        if (this.status === 200) {
            results = JSON.parse(this.responseText);
            promise.resolve(results);
        }
    };

    xhr.onerror = function (e) {
        promise.reject(e);
    };

    xhr.send();
    return promise;
}

function loadTweets() {
    var container, promise1, promise2;
	container = document.getElementById('container');
	promise1 = searchTwitter('#IE10');
	promise2 = searchTwitter('#IE9');
	Promise.when(promise1, promise2).then(function (data1, data2) {
	    /* Reshuffle due to date */
	    var totalResults = concatResults(data1.results, data2.results);
	    totalResults.forEach(function (tweet) {
	        var el = document.createElement('li');
	        el.innerText = tweet.text;
	        container.appendChild(el);
	    });
	}, handleError);
}