
var crawl = function(startUrl, htmlParser) {
    const getHostname = url => url.split("/")[2];
    const hostName = getHostname(startUrl);
    
    return dfs(htmlParser.getUrls(startUrl), new Set([startUrl]),hostName,htmlParser);
};

function dfs(urlList, seen, hostName, htmlParser){
    for(const url of urlList) {
        if(!seen.has(url) && url.includes(hostName)) {
            seen.add(url);
            dfs(htmlParser.getUrls(url), seen, hostName,htmlParser);
        }
    }
    return [...seen.values()];
}
