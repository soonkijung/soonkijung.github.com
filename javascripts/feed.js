$url="kuptf.org/?feed=rss2&page_id=70"
$rss = simplexml_load_file("$url");
$content = $rss->channel->item->children( "http://kuptf.org/?page_id=70" );
foreach ($rss->channel->item as $item) {
  echo $content->encoded;
}
