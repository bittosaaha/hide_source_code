//This script will not hide the source code.
//It can assure that no one can easily get the webpages source code.
//disables Right Click/ Context Menu
//disables Ctrl+I (For chrome)
//disable eruda script injections
//Enjoy, spread good things :)

!function(){document['addEventListener']('keydown',function(e){if(e['ctrlKey']&&e['key']==='i'){e['preventDefault']();}});document['addEventListener']('contextmenu',function(e){e['preventDefault']();});var a=document['body']['append'];document['body']['append']=function(){for(var e=0;e<arguments['length'];e++){if(arguments[e]['tagName']&&arguments[e]['tagName']['toLowerCase']()==='script'){console['error']('Appending script tag to body is not allowed.');return;}}a['apply'](this,arguments);};}()
