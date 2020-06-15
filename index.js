"use strict";

module.exports = Franz => class NewFranz extends Franz {

    overrideUserAgent() {
        // by using firefox useragent, microsoft office will show 
        // a webpage for login instead of the autentication dialog
        return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:75.0) Gecko/20100101 Firefox/75.0";
    }
};