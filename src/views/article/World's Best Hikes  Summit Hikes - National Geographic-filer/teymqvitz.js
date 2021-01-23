



/* ControlTag Loader for National Geographic (Fox) 93195edb-f10f-4f99-8f51-0f1b0bf1ab18 */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.41.5","schema_version":3},"confid":"teymqvitz","context_terms":[],"publisher":{"name":"National Geographic (Fox)","active":true,"uuid":"93195edb-f10f-4f99-8f51-0f1b0bf1ab18","version_bucket":"stable","id":2642},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"optout_button_id":"kx-optout-button","dfp_premium":true,"control_tag_namespace":"foxsports"},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/93195edb-f10f-4f99-8f51-0f1b0bf1ab18","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/93195edb-f10f-4f99-8f51-0f1b0bf1ab18","consent_set":"https://consumer.krxd.net/consent/set/93195edb-f10f-4f99-8f51-0f1b0bf1ab18","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/93195edb-f10f-4f99-8f51-0f1b0bf1ab18","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"NatGeo Web","cap":255,"id":1667885,"organization_id":2642,"uid":"teymqvitz"},"tags":[{"id":32169,"name":"Krux DTC Standard","content":"<script>\n(function(){\n\tKrux('scrape',{'page_attr_url_path_1':{'url_path':'1'}});\n\tKrux('scrape',{'page_attr_url_path_2':{'url_path':'2'}});\n\tKrux('scrape',{'page_attr_url_path_3':{'url_path':'3'}});\n\tKrux('scrape',{'page_attr_meta_keywords':{meta_name:'keywords'}});\n\n\tKrux('scrape',{'page_attr_domain':{url_domain: '2'}});\n\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":37756,"name":"FNG Custom DTC (Migrated from FNG account)","content":"<script>\n\n    if(window.utag && window.utag.data){    \n        Krux('scrape', {'user_attr_dcg_profile_id': {'javascript': \"utag.data['dcg_profile_id']\"}});\n        Krux('scrape', {'user_attr_segment_io_id': {'javascript': \"utag.data['segment_io_id']\"}});\n        Krux('scrape', {'user_attr_cp_aam_uuid': {'javascript': \"utag.data['cp.aam_uuid']\"}});\n        \n        Krux('scrape', {'user_attr__visit_repeat': {'javascript': \"utag.data['_visit_repeat']\"}});\n        Krux('scrape', {'user_attr__visit_number': {'javascript': \"utag.data['_visit_number']\"}});\n        Krux('scrape', {'page_attr_page_primary_business_unit': {'javascript': \"utag.data['primary_bu']\"}});\n        Krux('scrape', {'page_attr_page_secondary_business_unit': {'javascript': \"utag.data['secondary_bu']\"}});\n        Krux('scrape', {'page_attr_page_app_name': {'javascript': \"utag.data['app_name']\"}});\n        Krux('scrape', {'page_attr_page_app_platform': {'javascript': \"utag.data['app_platform']\"}});\n        \n        if(utag.data['page_name']){\n            Krux('scrape', {'page_attr_page_name': {'javascript': \"utag.data['page_name']\"}});\n            }\n            else{\n                Krux('scrape', {'page_attr_page_name': {'javascript': \"utag.data['qp.page_name']\"}});\n                };\n        \n        if(utag.data['sc_content_1']){\n            Krux('scrape', {'page_attr_page_contentLevel1': {'javascript': \"utag.data['sc_content_1']\"}});\n        }\n            else{\n                Krux('scrape', {'page_attr_page_contentLevel1': {'javascript': \"utag.data['contentLevel1']\"}});\n            };\n        if(utag.data['sc_content_2']){\n            Krux('scrape', {'page_attr_page_contentLevel2': {'javascript': \"utag.data['sc_content_2']\"}});\n        }\n            else{\n                 Krux('scrape', {'page_attr_page_contentLevel2': {'javascript': \"utag.data['contentLevel2']\"}});\n            };\n        if(utag.data['sc_content_3']){\n            Krux('scrape', {'page_attr_page_contentLevel3': {'javascript': \"utag.data['sc_content_3']\"}});\n        }\n            else{\n                Krux('scrape', {'page_attr_page_contentLevel3': {'javascript': \"utag.data['contentLevel3']\"}});\n            };\n         if(utag.data['sc_content_4']){\n            Krux('scrape', {'page_attr_page_contentLevel4': {'javascript': \"utag.data['sc_content_4']\"}});\n         }\n            else{        \n                Krux('scrape', {'page_attr_page_contentLevel4': {'javascript': \"utag.data['contentLevel4']\"}});\n            };\n        \n        Krux('scrape', {'page_attr_timestamp_day': {'javascript': \"utag.data['timestamp_day']\"}});\n        Krux('scrape', {'page_attr_timestamp_hour': {'javascript': \"utag.data['timestamp_hour']\"}});\n    }\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":37757,"name":"NatGeo Custom DTC (migrated from FNG)","content":"<script>\n(function(){\n\n    /* Custom DTC sent to us bu Fox for data collection on NatGo sites */\n\n    var pagename = (document.location.pathname == \"/\") ? \"home\" : document.location.pathname;\n    pagename = pagename.split(\"/\");\n    pagename = pagename.filter(function(entry) { return entry.trim() != ''; });\n    pagename.unshift(\"natgeo\");\n    pagename = pagename.join(\":\");\n    Krux('set', {'page_attr_page_name': pagename});\n\n    var contentArr =(document.location.pathname == \"/\") ? \"home\" : document.location.pathname;\n    var contentLevel1 = contentArr.split(\"/\");\n    contentLevel1 = contentLevel1.filter(function(entry) { return entry.trim() != ''; });\n    contentLevel1.unshift(\"natgeo\");\n    contentLevel1 = contentLevel1.slice(0, 2).join(':');\n    Krux('set', {'page_attr_page_contentLevel1': pagename});\n\n    var contentArr = (document.location.pathname == \"/\") ? \"home\" : document.location.pathname;\n    var contentLevel2 = contentArr.split(\"/\");\n    contentLevel2 = contentLevel2.filter(function(entry) { return entry.trim() != ''; });\n    contentLevel2.unshift(\"natgeo\");\n    contentLevel2 = contentLevel2.slice(0, contentLevel2.length <= 2 ? contentLevel2.length : 3).join(':');\n    Krux('set', {'page_attr_page_contentLevel2': pagename});\n\n    var contentArr = (document.location.pathname == \"/\") ? \"home\" : document.location.pathname;\n    var contentLevel3 = contentArr.split(\"/\");\n    contentLevel3 = contentLevel3.filter(function(entry) { return entry.trim() != ''; });\n    contentLevel3.unshift(\"natgeo\");\n    contentLevel3 = contentLevel3.slice(0, contentLevel3.length <= 2 ? contentLevel3.length : 4).join(':');\n    Krux('set', {'page_attr_page_contentLevel3': pagename});\n\n    var contentArr = (document.location.pathname == \"/\") ? \"home\" : document.location.pathname;\n    var contentLevel4 = contentArr.split(\"/\");\n    contentLevel4 = contentLevel4.filter(function(entry) { return entry.trim() != ''; });\n    contentLevel4.unshift(\"natgeo\");\n    contentLevel4 = contentLevel4.slice(0, contentLevel4.length <= 2 ? contentLevel4.length : 5).join(':');\n    Krux('set', {'page_attr_page_contentLevel4': pagename});\n\n    window.getTimeParting = function(h, z) {\n        var s = this,\n            od;\n        od = new Date('1/1/2000');\n        if (od.getDay() != 6 || od.getMonth() != 0) {\n            return 'Data Not Available';\n        } else {\n            var H, M, D, U, ds, de, tm, da = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n                d = new Date();\n            z = z ? z : 0;\n            z = parseFloat(z);\n            if (s._tpDST) {\n                var dso = s._tpDST[d.getFullYear()].split(/,/);\n                ds = new Date(dso[0] + '/' + d.getFullYear());\n                de = new Date(dso[1] + '/' + d.getFullYear());\n                if (h == 'n' && d > ds && d < de) {\n                    z = z + 1;\n                } else if (h == 's' && (d > de || d < ds)) {\n                    z = z + 1;\n                }\n            }\n            d = d.getTime() + (d.getTimezoneOffset() * 60000);\n            d = new Date(d + (3600000 * z));\n            H = d.getHours();\n            M = d.getMinutes();\n            M = (M < 10) ? '0' + M : M;\n            D = d.getDay();\n            U = ' AM';\n            if (H >= 12) {\n                U = ' PM';\n                H = H - 12;\n            }\n            if (H == 0) {\n                H = 12;\n            }\n            D = da[D];\n            tm = H + ':' + M + U;\n            return [tm, D];\n        }\n    };\n\n\n    Krux('set', {'page_attr_timestamp_hour': window.getTimeParting('n', '-8')[0]});\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":37758,"name":"Segment Blacklist DTC (migrated from FNG)","content":"<script>\n(function() {\n    var attr, config, custDelimit, dataObj, libUtil, omitKeys, prefix, userKeys;\n    libUtil = Krux('require:util.library-tag');\n    dataObj = Krux('scrape.javascript', 'kruxDataLayer');\n    userKeys = 'segmentio_user_id,segmentio_anonymous_id,segmentio_xid,user_entitlements';\n    omitKeys = 'undefined';\n    custDelimit = 'undefined';\n    prefix = libUtil.resolvePrefix('undefined', 'undefined',\n        'undefined');\n    config = {\n        'userKeys': userKeys ? userKeys.split(',') : void 0,\n        'omitKeys': (omitKeys ? omitKeys.split(',') : []).concat([/gtm\\./,\n            /sessionid/i, /\\.phpsessid$/i, /\\.sid$/i, /\\.zenid$/i,\n            /\\.requestid$/i\n        ]),\n        'omitValues': [/.*@.*(?:\\..*)+/, /gtm\\./, /^(https?:)?\\/\\/[^\\/]+/,\n            /^\\/[^\\/]+/, /.{255}/\n        ],\n        'customDelimited': custDelimit ? custDelimit.split(',') : void 0,\n        'caseSensitive': 'undefined' === 'true',\n        'useFullPath': 'false' === 'true',\n        'useLastValue': 'false' === 'true',\n        'optimizeNames': 'false' === 'true',\n        'convertAttrNames': []\n    };\n    if (prefix) {\n        config.convertAttrNames.push({\n            pattern: /((?:page|user)_attr_)/,\n            replacement: '$1' + prefix\n        });\n    }\n    attr = Krux('ingestDataLayer', dataObj, config);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":23,"name":"BlueKai S2S","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.05f9d0dad02f8a1b0b028b868bc3a3e2', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
