$url="http://kuptf.org/?feed=rss2&page_id=70"
$rss = simplexml_load_file("$url");
$content = $rss->channel->item->children( "http://kuptf.org/?page_id=70" );
foreach ($rss->channel->item as $item) {
  echo $content->encoded;
}

<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	>
<channel>
	<title>댓글 : 대회 공지사항</title>
	<atom:link href="http://kuptf.org/?feed=rss2&#038;page_id=70" rel="self" type="application/rss+xml" />
	<link>http://kuptf.org</link>
	<description></description>
	<lastBuildDate></lastBuildDate>
	<sy:updatePeriod>hourly</sy:updatePeriod>
	<sy:updateFrequency>1</sy:updateFrequency>
	<generator>https://wordpress.org/?v=4.4.2</generator>
</channel>
</rss>
