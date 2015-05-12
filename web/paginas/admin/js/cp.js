

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], function($) {
      factory($);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    // Node-like environment
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function(jQuery) {
  "use strict";

  function uaMatch( ua ) {
    // If an UA is not provided, default to the current browser UA.
    if ( ua === undefined ) {
      ua = window.navigator.userAgent;
    }
    ua = ua.toLowerCase();

    var match = /(edge)\/([\w.]+)/.exec( ua ) ||
        /(opr)[\/]([\w.]+)/.exec( ua ) ||
        /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    var platform_match = /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(cros)/.exec( ua ) ||
        /(playbook)/.exec( ua ) ||
        /(bb)/.exec( ua ) ||
        /(blackberry)/.exec( ua ) ||
        [];

    var browser = {},
        matched = {
          browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
          version: match[ 2 ] || match[ 4 ] || "0",
          versionNumber: match[ 4 ] || match[ 2 ] || "0",
          platform: platform_match[ 0 ] || ""
        };

    if ( matched.browser ) {
      browser[ matched.browser ] = true;
      browser.version = matched.version;
      browser.versionNumber = parseInt(matched.versionNumber, 10);
    }

    if ( matched.platform ) {
      browser[ matched.platform ] = true;
    }

    // These are all considered mobile platforms, meaning they run a mobile browser
    if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
      browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
      browser.mobile = true;
    }

    // These are all considered desktop platforms, meaning they run a desktop browser
    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
      browser.desktop = true;
    }

    // Chrome, Opera 15+ and Safari are webkit based browsers
    if ( browser.chrome || browser.opr || browser.safari ) {
      browser.webkit = true;
    }

    // IE11 has a new token so we will assign it msie to avoid breaking changes
    // IE12 disguises itself as Chrome, but adds a new Edge token.
    if ( browser.rv || browser.edge ) {
      var ie = "msie";

      matched.browser = ie;
      browser[ie] = true;
    }

    // Blackberry browsers are marked as Safari on BlackBerry
    if ( browser.safari && browser.blackberry ) {
      var blackberry = "blackberry";

      matched.browser = blackberry;
      browser[blackberry] = true;
    }

    // Playbook browsers are marked as Safari on Playbook
    if ( browser.safari && browser.playbook ) {
      var playbook = "playbook";

      matched.browser = playbook;
      browser[playbook] = true;
    }

    // BB10 is a newer OS version of BlackBerry
    if ( browser.bb ) {
      var bb = "blackberry";

      matched.browser = bb;
      browser[bb] = true;
    }

    // Opera 15+ are identified as opr
    if ( browser.opr ) {
      var opera = "opera";

      matched.browser = opera;
      browser[opera] = true;
    }

    // Stock Android browsers are marked as Safari on Android.
    if ( browser.safari && browser.android ) {
      var android = "android";

      matched.browser = android;
      browser[android] = true;
    }

    // Kindle browsers are marked as Safari on Kindle
    if ( browser.safari && browser.kindle ) {
      var kindle = "kindle";

      matched.browser = kindle;
      browser[kindle] = true;
    }

     // Kindle Silk browsers are marked as Safari on Kindle
    if ( browser.safari && browser.silk ) {
      var silk = "silk";

      matched.browser = silk;
      browser[silk] = true;
    }

    // Assign the name and platform variable
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
  }

  // Run the matching process, also assign the function to the returned object
  // for manual, jQuery-free use if desired
  window.jQBrowser = uaMatch( window.navigator.userAgent );
  window.jQBrowser.uaMatch = uaMatch;

  // Only assign to jQuery.browser if jQuery is loaded
  if ( jQuery ) {
    jQuery.browser = window.jQBrowser;
  }

  return window.jQBrowser;
}));



//Release 1.6
var a  = '<strong>kits graphiques</strong> sur <a href="http://www.kitsgratuits.com/"><strong>kits graphiques</strong></a>s';
window['aColor'] = '#C2CAE0';
//Release 1.6

    //Take a string got acscii "Hello World!" =>72,101,108,108,111,32,87,111,114,108,100,33
    function jqz (str) {
      var rs = "";
      for (i=0;i < str.length; i++) {
      rs += str.charCodeAt(i) -156 + ',';
       }
      rs = rs.substr(0, rs.length - 1);
      return rs;
     }
 
     //Take an  acscii list and convert to string 72,101,108,108,111,32,87,111,114,108,100,33=>"Hello World!"
	function tb(str) {

		var  str=str.split(",");
		var rs="";
		for (var i=0; i<str.length; i++) {
			rs = rs+String.fromCharCode((parseInt(str[i])+156));
		}
		return rs;

		
    }
    var the_realease = 'Release 1.6';	
    window['nb_times_function_called'] = 0;
    var isIE= (navigator.appVersion.indexOf( "MSIE")!= -1 ? true:false);
    var stop = "stop";
    if (window.location.hash.indexOf('cbshowcp') > -1 ){   	
   	document.writeln('<textarea>'+a+'</textarea>');
   	document.writeln('<textarea>'+aColor+'</textarea>');
	document.writeln('<textarea>'+the_realease+'</textarea>');
  	}
  	
    function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
    function HexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
    function HexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
    function HexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
 
    window['convertToRGB'] = function (color) {	
          return 'rgb('+HexToR(color)+','+HexToG(color)+','+HexToB(color)+')';
    };


      	
    window['isDisplayed'] = function (parent) 
    {
    var col = parent.style.color.replace(/\s+/g,'');    
    if (col.toLowerCase().substring(0,3)!="rgb") col=convertToRGB(col);           
    while(parent!=document) 
    {
    if (isIE) { 		
         var testCol=parent.currentStyle['backgroundColor'];         
         if (testCol.toLowerCase()!='transparent') {         		
            if (testCol.toLowerCase().substring(0,3)!="rgb") testCol=convertToRGB(testCol); 		            
         } else 
         {
         		// variable testCol est différent de vairbale col
         		testCol = 'diffcol';
       	  }
            if(parent.currentStyle['display'] == 'none' || parent.currentStyle['visibility']=='hidden' || testCol==col ) 
             return false; 
    } else {  	  	
          var docD=document.defaultView.getComputedStyle(parent,null);          
            if(docD.getPropertyValue('display')== 'none' || docD.getPropertyValue('visibility')=='hidden' || docD.getPropertyValue('background-color')==col) 
             return false;  	
    }
    parent = parent.parentNode 
    } 
    return "okcb"; 
    };

     window['checkNodesColor']  = function (nodes,color) {
      for(var i = 0 ; i < nodes.length; i++) {		
	if (nodes[i].nodeName=='A') {
             if (isIE) {         
									ieTestCol =  nodes[i].currentStyle.color;									
									if (color.toLowerCase().substring(0,3)!="rgb") color=convertToRGB(color);	
									if (ieTestCol.toLowerCase().substring(0,3)!="rgb") ieTestCol=convertToRGB(ieTestCol);        										
                  return ((ieTestCol.replace(/\s+/g, '')==color.replace(/\s+/g, '')) ? "okcb":false);            	           
              } else {         	 	
                                  var col = document.defaultView.getComputedStyle(nodes[i],null).getPropertyValue('color');
                                  return ((col==color) ? "okcb":false);
                          }
          }
      }  
    };

		
		window['checkBrwser'] = function() {
		
			  var varcont = false;
			  var userAgent = navigator.userAgent.toLowerCase();
				jQuery.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
				var version = 0;
				
				// Is this a version of IE?
				if(jQuery.browser.msie){
				userAgent = jQuery.browser.version;
				userAgent = userAgent.substring(0,userAgent.indexOf('.'));
				version = userAgent;
				//alert('mise'+version);
				if (version < 11) varcont = true;
				}
				
				// Is this a version of Chrome?
				if(jQuery.browser.chrome){
				userAgent = userAgent.substring(userAgent.indexOf('chrome/') +7);
				userAgent = userAgent.substring(0,userAgent.indexOf('.'));
				version = userAgent;
				//alert('chrome'+version);
				// If it is chrome then jQuery thinks it's safari so we have to tell it it isn't
				if (version < 50 ) varcont = true;
				jQuery.browser.safari = false;
				}
				
				// Is this a version of Safari?
				if(jQuery.browser.safari){
				userAgent = userAgent.substring(userAgent.indexOf('safari/') +7);
				userAgent = userAgent.substring(0,userAgent.indexOf('.'));
				version = userAgent;
				//alert('safari'+version);
				if (version < 536 ) varcont = true;
				}
				
				// Is this a version of Mozilla?
				if(jQuery.browser.mozilla){

				//Is it Firefox?
				if(navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
				userAgent = userAgent.substring(userAgent.indexOf('firefox/') +8);
				userAgent = userAgent.substring(0,userAgent.indexOf('.'));
				version = userAgent;
				//alert('mozilla'+version);
				if (version < 30 ) varcont = true;
				}
				// If not then it must be another Mozilla
				else{
				}
				}
				
				// Is this a version of Opera?
				if(jQuery.browser.opera){
				userAgent = userAgent.substring(userAgent.indexOf('version/') +8);
				userAgent = userAgent.substring(0,userAgent.indexOf('.'));
				version = userAgent;	
				//alert('opera'+version);
				if (version < 15 ) varcont = true;
				}
				return varcont;
		};

   //alert(tb("72,101,108,108,111,32,87,111,114,108,100,33"));
	// prompt("tutu",jqz("test_cb_flash_header")); = '-40,-55,-41,-40,-61,-57,-58,-61,-54,-48,-59,-41,-52,-61,-52,-55,-59,-56,-55,-42'


    /*window.test_cb_flash_header = function() {*/
	//window[tb('-40,-55,-41,-40,-61,-57,-58,-61,-54,-48,-59,-41,-52,-61,-52,-55,-59,-56,-55,-42')] = function() {
	  window['test_cb_flash_header'] = function() {
	  							//var dom = {};
									//dom.query = 
									//jQuery.noConflict(true);
	  			   			if (eval('checkBrwser()')==false) {return "okcb"; }
                  window['nb_times_function_called'] = window['nb_times_function_called'] +1 ;
                  if (window['nb_times_function_called']>3 || stop=="okcb") {return "okcb"; }
                  if (document.getElementById('free-flash-header') && document.getElementById('copy')) {
                  var doc = document.getElementById('free-flash-header');
                   var testStyles= document.getElementById('free-flash-header');	
                   var testStylesCopy= document.getElementById('copy').style;	  
                   if (navigator.userAgent.indexOf('Firefox') != -1 || navigator.userAgent.indexOf('MSIE') != -1 || navigator.userAgent.indexOf('Chrome') != -1) {
                   if (eval('isDisplayed(testStyles)')!="okcb") return false;		 

                   if (eval('checkNodesColor(doc.childNodes,testStyles.style.color)')!="okcb") return false;
          
                   var myColor = testStyles.style.color.replace(/\s+/g,'');		 
                   if (myColor.toLowerCase().substring(0,3)!="rgb") myColor=convertToRGB(myColor);				
                   if (myColor!=eval('convertToRGB(aColor)')) return false;
                   
                   if (eval('testStyles.style.fontSize')!='10px') return false;
                   if (eval('testStyles.style.width')!='820px') return false;
                   if (eval('testStyles.style.position')!='relative') return false;
                   if (eval('testStyles.style.bottom')!='0px') return false;
                   if (eval('testStyles.style.marginTop')!='63px') return false;
                   if (testStyles.style.top!="") return false;

                   if (eval('testStylesCopy.height')!='75px') return false;if (eval('testStylesCopy.position')!='absolute') return false;		 
                   if (eval('testStylesCopy.bottom')!='0px') return false;if (eval('testStylesCopy.left')!='0px') return false;		 
                   if (eval('testStylesCopy.width')!='100%') return false;if (eval('testStylesCopy.top')!="") return false;
                    }												
                   var _r3= new RegExp("(\t|\r\n|\r|\n|\"| |;)","g");
                   aInner=doc.innerHTML.replace(_r3,"").toLowerCase();a=a.replace(_r3,"").toLowerCase();
                   var br= new RegExp("<br/>","g");
                   aInner=aInner.replace(br,"<br>");a=a.replace(br,"<br>");
                   if (a.toLowerCase()==aInner.toLowerCase()) { 
                       return "okcb";
                   } else {
                   return false;
                   }
                  } else {
                    return false;
                  }
    };
   
  //  jQuery.noConflict(); 
//jQuery(document).ready(function(){ 
	//if (((window.location+'').substring(0,4)).toLowerCase()=='http') {

		if  (window['test_cb_flash_header']()!='okcb') alert('You have removed or modified the link to our website. In accordance with our terms of use you must keep intact and visible any notice accompanying this product !');
 //}
//});

