/**
 * jQuery Inbox Influence
 *
 * A jQuery/javascript library for interacting with the Sunlight Foundation's
 * Influence Explorer text API.
 * Copyright 2012, Dan Drinkard <dan.drinkard@gmail.com>
 * BSD 3-Clause License.
 */

(function($, window, undefined){

    window.InboxInfluence || (InboxInfluence = {
        'apiKey': null,
        'baseURI': 'https://inbox.influenceexplorer.com/',
        'callback': '?',
        'CORS': false
    });

    InboxInfluence._call = function(method, args, options){
        if(!this.apiKey){
            throw('API Key required, get one at http://services.sunlightlabs.com/accounts/register/');
        }

        var qs = '?apikey=' + this.apiKey,
            cors = options.CORS || this.CORS,
            verb = 'GET',
            data = {};
        console.log(cors);
        if(cors){
            verb = 'POST';
            data = args;
        }else{
            qs += '&' + $.param($.extend({'callback': this.callback}, args));
            options.dataType = 'jsonp';
        }

        qs = $.param($.extend({
            'apikey': this.apiKey
        }, args));
        
        return $.ajax($.extend({
            'url': this.baseURI + method + '?' + qs,
            'data': data,
            'type': verb
        }, options));
    };

    InboxInfluence.contextualize = function(text, opts){
        var options = opts || {};
        if (text.length > 2000) options.CORS = true;
        return this._call('contextualize', {'text': text}, options);
    };

})(jQuery, window);