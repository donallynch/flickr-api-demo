/* Flickr API demonstration by Donal Lynch */
var flickrApi = {
    apiKey: 'd5dab213a7b97e76c8327ce6e49bb654',
    init: function () {
        flickrApi.initialiseEvents();
    },
    initialiseEvents: function () {
		document.getElementById("cat").onclick = function(){flickrApi.flickr('cat');};
        document.getElementById("dog").onclick = function(){flickrApi.flickr('dog');};
        document.getElementById("giraffe").onclick = function(){flickrApi.flickr('giraffe');};

        /* Flickr API Callback */
        /* This runs after the API responds and places the retrieved images into the DOM */
        window.jsonFlickrApi = function(data) {
            var photos = data.photos.photo,
                output = '',
                i;
            for (i = 0; i < photos.length; i++) {
                output += '<img src="https://farm' + photos[i]['farm'] + '.staticflickr.com/' + photos[i]['server'] + '/' + photos[i]['id'] + '_' + photos[i]['secret'] + '.jpg"><br>';
            }
            document.getElementById("animals").innerHTML = output;
        };
    },
    flickr: function loadXMLDoc(animal) {
        var baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+flickrApi.apiKey+'',
            http = new XMLHttpRequest(),
            url = baseUrl + '&tags='+animal+urlConfig,
            urlConfig = '&per_page=5&format=json';

        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.onreadystatechange = function() {
            if (http.readyState == 4 && http.status == 200) {
                var url = baseUrl + '&tags='+animal+urlConfig,
                    s = document.createElement('script');
                s.setAttribute('src', url);
                document.body.appendChild(s);
            }
        };
        http.send();
    }
};
flickrApi.init();

